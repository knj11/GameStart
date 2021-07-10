import React, { useContext } from "react"
import { CardActions, Button } from "@material-ui/core"
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import { makeStyles } from "@material-ui/core/styles";

import { ShoppingCartContext } from "./App";
import { createCart, addItemToOrder, removeItemFromOrder } from "../api";

const useStyles = makeStyles({
  addShopingCartContainer: {
    display: "flex",
    flexFlow: "row",
    gridColumn: "1/1",
    justifyContent: "center",
  },
  cardAction: {
    display: "grid",
    gridTemplateColumns: "repeat(5,1fr)",
    width: "99%",
    padding: "2px",
    border: "1px solid blue",
    borderRadius: "4px",
    backgroundColor: "#4050B5",
    margin: "0px",
  },
  addShoppingCartIcon: {
    gridColumn: "1/1",
    border: "1px solid white",
    padding: "4px",
    borderRadius: "50%",
    alignSelf: "center",
    color: "white",
  },
  shoppingCartCountNotifier: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "1.2rem",
    width: "1.2rem",
    position: "relative",
    borderRadius: "50%",
    backgroundColor: "red",
    padding: "2px",
  },
  removeShopingCartContainer: {
    display: "flex",
    flexFlow: "row",
    gridColumn: "5/-1",
    justifyContent: "center",
  },
  removeShoppingCartIcon: {
    border: "1px solid white",
    padding: "4px",
    borderRadius: "50%",
    alignSelf: "center",
    color: "white",
    fontWeight: "bolder",
  },
});

const UserCardActions = ({ product, sessionId }) => {
  const classes = useStyles();
  const { shoppingCart, setShoppingCart } = useContext(ShoppingCartContext);

  async function handleAddToShoppingCart(product) {
    try {
      if (!shoppingCart?.orderId) {
        const { data: cart } = await createCart({
          productId: product.id,
          quantity: 1,
          description: product.description,
          price: product.unitPrice,
          sessionId: sessionId,
          orderDate: new Date().toLocaleDateString(),
          inventoryId: product.inventoryId,
        });

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
        (p) => p.inventoryId !== product.inventoryId
      );
      tShoppingCart.Items.push({
        productId: product.id,
        quantity: addedItem.quantity,
        description: product.description,
        price: addedItem.unitPrice,
        orderId: addedItem.orderId,
        inventoryId: product.inventoryId,
        itemId: addedItem.id,
      });
      setShoppingCart(tShoppingCart);
      return;
    } catch (error) {
      console.log(error);
    }
  }

  async function handleRemoveFromShoppingCart(product) {
    try {
      if (!shoppingCart && shoppingCart.Items?.length < 1) return;
      const tempProdct =
        shoppingCart.Items.length > 0 &&
        shoppingCart.Items.filter((p) => p.inventoryId == product.inventoryId);
      if (!tempProdct || tempProdct.length == 0) return;

      let orderItemId = tempProdct[0].itemId;
      let inventoryId = product.inventoryId;

      const { data: removedItem } = await removeItemFromOrder({
        inventoryId,
        orderItemId,
      });

      const tShoppingCart = { ...shoppingCart };
      tShoppingCart.Items = shoppingCart.Items.filter(
        (p) => p.inventoryId !== product.inventoryId
      );

      if (!removedItem || removedItem.length == 0) {
        setShoppingCart(tShoppingCart);
        return;
      }

      tShoppingCart.Items.push({
        productId: product.id,
        quantity: removedItem.quantity,
        description: product.description,
        price: removedItem.unitPrice,
        orderId: removedItem.orderId,
        inventoryId: product.inventoryId,
        itemId: removedItem.id,
      });
      setShoppingCart(tShoppingCart);
    } catch (error) {
      console.log(error);
    }
  }

  const getOrderCountForInvetory = (inventoryId) => {
    const { Items: items } = shoppingCart?.Items ? shoppingCart : [];

    if (!items) return;

    const numberOfItems = items.reduce(
      (acc, p) => (p.inventoryId == inventoryId ? +p.quantity + acc : acc),
      0
    );

    return numberOfItems;
  };

  return (
    <CardActions className={classes.cardAction}>
      <div className={classes.addShopingCartContainer}>
        <Button
          variant="contained"
          color="primary"
          style={{ backgroundColor: "navy" }}
          onClick={() => handleAddToShoppingCart(product)}
        >
          <AddShoppingCartIcon className={classes.addShoppingCartIcon} />

          {"    " + getOrderCountForInvetory(product.inventoryId) > 0 ? (
            <span className={classes.shoppingCartCountNotifier}>
              {getOrderCountForInvetory(product.inventoryId)}{" "}
            </span>
          ) : (
            ""
          )}
        </Button>
      </div>
      <div className={classes.removeShopingCartContainer}>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleRemoveFromShoppingCart(product)}
        >
          <RemoveShoppingCartIcon className={classes.removeShoppingCartIcon} />
        </Button>
      </div>
    </CardActions>
  )
}

export default UserCardActions