import React, { useContext } from "react";
import {
  CardActions,
  Button,
  CardHeader,
  CardContent,
  Typography,
} from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Grid } from "@material-ui/core";
import { ShoppingCartContext } from "./App";
import { createCart, addItemToOrder, removeItemFromOrder } from "../api";
import { CardDescription, EditCard } from "./";
import { deleteProduct } from "../api";
import handleAddToShoppingCartCreator from "../util/handleAddToShoppingCart";
import handleRemoveFromShoppingCartRemover from "../util/handleRemoveFromShoppingCart";

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
  gridStyle: {
    width: "100%",
    display: "flex",
    flexFlow: "column",
  },
});

//({ product, isAdmin, user, setProducts })
const UserCardView = ({ products, sessionId, user }) => {
  const classes = useStyles();
  const { shoppingCart, setShoppingCart } = useContext(ShoppingCartContext);

  const handleAddToShoppingCart = handleAddToShoppingCartCreator({
    user,
    addItemToOrder,
    createCart,
    shoppingCart,
    setShoppingCart,
    sessionId,
  });

  const handleRemoveFromShoppingCart = handleRemoveFromShoppingCartRemover({
    shoppingCart,
    setShoppingCart,
    removeItemFromOrder,
    sessionId,
  });

  const getOrderCountForInvetory = (inventoryId) => {
    const { Items: items } = shoppingCart?.Items ? shoppingCart : [];

    if (!items) return;

    const numberOfItems = items.reduce(
      (acc, p) =>
        p.product.inventoryId == inventoryId ? +p.quantity + acc : acc,
      0
    );

    return numberOfItems;
  };

  return (
    <>
      {products &&
        products.map((product) => (
          <Card
            key={product.inventoryId}
            elevation={2}
            className={classes.cardHeight}
          >
            <CardHeader
              title={product.title + "-" + product.inventoryDescription}
              subheader={product.unitPrice}
            ></CardHeader>
            <CardContent className={classes.scroll}>
              <Typography>Description:</Typography>
              <Typography>{product.description}</Typography>
            </CardContent>
            {/*Break the cardActions into 2 components. 1 for Admin, one for standard user. Below is Admin code*/}
            {/*{(isAdmin) &&
          <CardActions style={{ "justifyContent": 'flex-end' }}>
            <IconButton style={{ color: 'red' }} onClick={handleDelete}>
              <DeleteForeverIcon />
            </IconButton>
            <IconButton color='primary' onClick={() => setEditMode(!editMode)}>
              <EditIcon />
            </IconButton>
          </CardActions>
        }*/}
            <CardActions className={classes.cardAction}>
              <div className={classes.addShopingCartContainer}>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ backgroundColor: "navy" }}
                  onClick={() => handleAddToShoppingCart(product)}
                >
                  <AddShoppingCartIcon
                    className={classes.addShoppingCartIcon}
                  />

                  {"    " + getOrderCountForInvetory(product.inventoryId) >
                  0 ? (
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
                  <RemoveShoppingCartIcon
                    className={classes.removeShoppingCartIcon}
                  />
                </Button>
              </div>
            </CardActions>
          </Card>
        ))}
    </>
  );
};

export default UserCardView;
