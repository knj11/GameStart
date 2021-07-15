const handleRemoveFromShoppingCartRemover = ({
  shoppingCart,
  setShoppingCart,
  removeItemFromOrder,
  sessionId,
}) => {
  return async function handleRemoveFromShoppingCart(product) {
    try {
      if (!shoppingCart && shoppingCart.Items?.length < 1) return;
      const tempProdct =
        shoppingCart.Items.length > 0 &&
        shoppingCart.Items.filter(
          (p) => p.product.inventoryId == product.inventoryId
        );
      if (!tempProdct || tempProdct.length == 0) return;

      let orderItemId = tempProdct[0].itemId;
      let inventoryId = product.inventoryId;

      const { data: removedItem } = await removeItemFromOrder({
        inventoryId,
        orderItemId,
      });

      const tShoppingCart = { ...shoppingCart };
      tShoppingCart.Items = shoppingCart.Items.filter(
        (p) => p.product.inventoryId !== product.inventoryId
      );

      if (!removedItem || removedItem.length == 0) {
        tShoppingCart.Items.sort((a, b) => a.itemId - b.itemId);
        setShoppingCart(tShoppingCart);
        return;
      }

      tShoppingCart.Items.push({
        product: product,
        quantity: removedItem.quantity,
        unitPrice: removedItem.unitPrice,
        orderId: removedItem.orderId,
        itemId: removedItem.id,
      });
      tShoppingCart.Items.sort((a, b) => a.itemId - b.itemId);
      setShoppingCart(tShoppingCart);
    } catch (error) {
      console.log(error);
    }
  };
};
export default handleRemoveFromShoppingCartRemover;
