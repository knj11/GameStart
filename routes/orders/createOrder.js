const {
  createNewOrder,
  getItemFromInventory,
  addItem,
  getOrderBySessionId,
} = require("../../db");

async function createOrder(req, res, next) {
  try {
    const userId = req.user ? req.user : 21;
    const { price: unitPrice, quantity, sessionId, productId ,inventoryId} = req.body;
    const inventory = await getItemFromInventory(inventoryId);
    console.log(inventory);
    if (!inventory) {
      throw Error("Out of Stock");
    }
    const { id: orderId } = await createNewOrder({
      userId,
      sessionId,
      totalAmount: unitPrice,
    });

    const orderItemId = getOrderBySessionId(sessionId);
    console.log("orderItemId:", orderItemId);

    const updateCart = await addItem({ productId, orderId, quantity, unitPrice });
    console.log("update cart:", updateCart);
    const cart = {};
    cart.sessionId = sessionId;
    cart.orderId=orderId
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
