const {
  getOrderBySessionId,
  createNewOrder,
  getItemFromInventory,
  addItem,
} = require("../../db");

async function createOrder(req, res, next) {
  try {
    const userId = req.user ? req.user : 21;
    const { price: unitPrice, quantity, sessionId, productId } = req.body;
    const inventory = await getItemFromInventory(1);
    console.log(inventory);
    if (!inventory) {
      throw Error("Out of Stock");
    }
    const { id: orderId } = await createNewOrder({
      userId,
      sessionId,
      totalAmount: unitPrice,
    });
    const updateCart = await addItem({ productId, orderId, quantity, unitPrice });
    console.log("update cart:", updateCart);
    const cart = {};
    cart.sessionId = sessionId;
    cart.userId = userId;
    cart.items = [
      {
        productId: updateCart.productId,
        itemId: updateCart.id,
        quantity: updateCart.quantity,
        unitPrice: updateCart.unitPrice,
      },
    ];

    res.send(cart);
  } catch (error) {
    const { code, message } = error;
    console.log(code, message);
    next({ message: { code, message }, status: 500 });
  }
}

module.exports = createOrder;
