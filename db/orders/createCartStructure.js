function createCartStructure(arrayedOrders) {
  const cart = [];
  let tempArray = [];
  try {
    arrayedOrders.forEach((order) => {
      if (!cart.find((o) => o.orderId == order.orderId)) {
        let { orderId, userId, sessionId } = order;
        tempArray = arrayedOrders.filter((o) => o.orderId == order.orderId);
        let items = [];
        if (tempArray.length !== 0) {
          tempArray.forEach((o) => {
            items.push({
              itemId: o.itemId,
              quantity: o.quantity,
              unitPrice: o.unitPrice,
              dateShared: o.dateShared,
              title: o.title,
              product: {
                id: o.productId,
                description: o.description,
                inventoryDescription: o.inventoryDescription,
                inventoryId: o.inventoryId,
                picture: o.picture,
              },
            });
          });
        }
        cart.push({
          orderId,
          userId,
          sessionId,
          Items: items,
        });
      }
    });

    // if (cart.Items[0] && cart.Items[0].itemId == null) {
    //   cart.Items.splice(0);
    // }
    return cart;
  } catch (error) {
    throw error;
  }
}
module.exports = { createCartStructure };
