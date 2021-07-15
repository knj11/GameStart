function productsToArrayedObjWithInventory(arrayedProducts) {
  const products = [];
  let tempArray = [];
  try {
    arrayedProducts.forEach((product) => {
      if (!products.find((p) => p.id == product.id)) {
        let { id, title, description, picture, unitPrice } = product;
        tempArray = arrayedProducts.filter((p) => p.id == product.id);
        let inventory = [];
        if (tempArray.length !== 0) {
          tempArray.forEach((i) => {
            inventory.push({
              inventoryId: i.inventoryId,
              quantity: i.quantity,
              consoleId: i.consoleId,
              description: i.inventoryDescription,
            });
          });
        }
        products.push({
          id,
          title,
          description,
          picture,
          unitPrice,
          Inventory: inventory,
        });
      }
    });

    // if (cart.Items[0] && cart.Items[0].itemId == null) {
    //   cart.Items.splice(0);
    // }
    return products;
  } catch (error) {
    throw error;
  }
}
module.exports = { productsToArrayedObjWithInventory };
