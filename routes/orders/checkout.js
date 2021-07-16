const { STRIPE_SECRET } = process.env;

const axios = require("axios");
const stripe = require("stripe")(STRIPE_SECRET);

const { v4: uuidv4 } = require("uuid");

const { updateOrderStatusDb } = require("../../db");

async function checkoutOrder(req, res) {
  console.log("Request:", req.body);
  console.log(STRIPE_SECRET);

  let error;
  let status;
  try {
    const { token, shoppingCart } = req.body;
    console.log(shoppingCart);

    const getShoppingCartTotal = (shoppingCart) => {
      let totalSum = shoppingCart.Items.reduce(
        (acc, item) => acc + +item.quantity * +item.unitPrice,
        0
      );

      console.log(Math.round(100 * totalSum), "------------------");
      return totalSum;
    };

    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    console.log(Math.round(getShoppingCartTotal(shoppingCart) * 100));
    const idempotencyKey = uuidv4();
    const charge = await stripe.charges.create(
      {
        amount: Math.round(getShoppingCartTotal(shoppingCart) * 100),
        currency: "usd",
        customer: customer.id,
        receipt_email: token.email,
        description: `Purchased the Games at GameStart`,
        shipping: {
          name: token.card.name,
          address: {
            line1: token.card.address_line1,
            line2: token.card.address_line2,
            city: token.card.address_city,
            country: token.card.address_country,
            postal_code: token.card.address_zip,
          },
        },
      },
      {
        idempotencyKey,
      }
    );
    console.log("Charge:", { charge });
    console.log(shoppingCart.orderId);
    const updatedOrder = await updateOrderStatusDb({
      orderId: shoppingCart.orderId,
    });
    console.log(updatedOrder);
    status = "success";
  } catch (error) {
    console.error("Error:", error);
    status = "failure";
  }

  res.json({ error, status });
}

module.exports = { checkoutOrder };
