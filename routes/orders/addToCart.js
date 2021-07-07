const { getItemFromInventory, addItem, addToOrderTotal } = require("../../db");
async function addToCart(req, res, next) {
  try {
    const userId = req.user ? req.user : 21;
    const { unitPrice, quantity, sessionId, productId,inventoryId } = req.body;
    const { orderId } = req.params;
    const inventory = await getItemFromInventory(inventoryId); //how do we get the inventoryId?
    if (!inventory) {
      throw Error("Out of Stock");
    }
    const newItem = await addItem({ productId, orderId, quantity, unitPrice,inventoryId });
    await addToOrderTotal(unitPrice, orderId);
    res.send(newItem);
  } catch (error) {
    console.log("addToCart....",error);
    const { code, message } = error;
    next({ message: { code, message }, status: 500 });
  }
}

module.exports = addToCart;
