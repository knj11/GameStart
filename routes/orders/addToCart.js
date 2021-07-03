const { getItemFromInventory, addItem, addToOrderTotal } = require("../../db");
async function addToCart(req, res, next) {
  try {
    const userId = req.user ? req.user : 21;
    const { price: unitPrice, quantity, sessionId, productId } = req.body;
    const { orderId } = req.params;
    const inventory = await getItemFromInventory(9); //how do we get the inventoryId?
    if (!inventory) {
      throw Error("Out of Stock");
    }

    const updateCart = await addItem({ productId, orderId, quantity, unitPrice });
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
    console.log("unitPrice:", unitPrice);

    await addToOrderTotal(unitPrice, orderId);

    res.send(cart);
  } catch (error) {
    console.log(error);
    const { code, message } = error;
    next({ message: { code, message }, status: 500 });
  }
}

module.exports = addToCart;
