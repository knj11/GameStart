const handleAddToShoppingCartCreator = ({
  user,
  addItemToOrder,
  createCart,
  shoppingCart,
  setShoppingCart,
  sessionId,
}) => {
  return async function handleAddToShoppingCart(product) {
    try {
      if (!shoppingCart?.orderId) {
        const { data: cart } = await createCart({
          user,
          productId: product.id,
          quantity: 1,
          description: product.description,
          price: product.unitPrice,
          sessionId: sessionId,
          orderDate: new Date().toLocaleDateString(),
          inventoryId: product.inventoryId,
        });
        console.log(cart);
        cart.Items[0].product = product;
        console.log(cart);

        cart.Items.sort((a, b) => a.itemId - b.itemId);

        setShoppingCart({ ...cart });
        return;
      }

      const addedItem = await addItemToOrder({
        productId: product.id,
        quantity: 1,
        description: product.description,
        unitPrice: product.unitPrice,
        orderId: shoppingCart.orderId,
        inventoryId: product.inventoryId,
      });

      const tShoppingCart = { ...shoppingCart };
      tShoppingCart.Items = shoppingCart.Items.filter(
        (p) => p.product.inventoryId !== product.inventoryId
      );
      tShoppingCart.Items.push({
        product: product,
        quantity: addedItem.quantity,
        unitPrice: addedItem.unitPrice,
        orderId: addedItem.orderId,
        itemId: addedItem.id,
      });
      tShoppingCart.Items.sort((a, b) => a.itemId - b.itemId);
      setShoppingCart(tShoppingCart);
      return;
    } catch (error) {
      console.log(error);
    }
  };
};

export default handleAddToShoppingCartCreator;
