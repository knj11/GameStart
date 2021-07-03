function createCartStructure(arrayedOrders) {
  const cart = [];
  let tempArray = [];
  try {
    arrayedOrders.forEach((order) => {
      if (!cart.find((o) => o.orderId == order.orderId)) {
        let { orderId, userId, sessionId } = order;
        tempArray = arrayedOrders.filter((o) => o.orderId == order.orderId);
        let items = [];
        tempArray.forEach((o) => {
          items.push({
            itemId: o.itemId,
            quantity: o.quantity,
            unityPrice: o.unityPrice,
            dateShared: o.dateShared,
            productId: o.productId,
            title: o.title,
            description: o.description,
            picture: o.picture,
            inventoryId:o.inventoryId,
            inventoryDescription:o.inventoryDescription
          });
        });
        cart.push({
          orderId,
          userId,
          sessionId,
          Items: items,
        });
      }
    });
    return cart;
  } catch (error) {
    throw error;
  }
}
module.exports = { createCartStructure };
