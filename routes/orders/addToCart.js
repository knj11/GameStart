const { getItemFromInventory, addItem, addToOrderTotal } = require("../../db");
async function addToCart(req, res, next) {
  try {
    const userId = req.user ? req.user : 21;
    const { price: unitPrice, quantity, sessionId, productId,inventoryId } = req.body;
    const { orderId } = req.params;
    const inventory = await getItemFromInventory(inventoryId); //how do we get the inventoryId?
    if (!inventory) {
      throw Error("Out of Stock");
    }
    const newItem = await addItem({ productId, orderId, quantity, unitPrice });
    await addToOrderTotal(unitPrice, orderId);
    res.send(newItem);
  } catch (error) {
    console.log(error);
    const { code, message } = error;
    next({ message: { code, message }, status: 500 });
  }
}

module.exports = addToCart;
