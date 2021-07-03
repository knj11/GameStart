import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import Button from "@material-ui/core/Button";
import { CenterFocusStrong } from "@material-ui/icons";

import {createCart,addItemToOrder} from '../api'

const useStyles = makeStyles({
  gridContainer: {
    padding: "18px",
  },
  cardHeight: {
    height: "230px",
  },
  scroll: {
    //make sure to consider parent "contanter" when setting height. If larger the box wont scroll
    overflow: "auto",
    height: "100px",
  },
  cardAction: {
    display: "grid",
    gridTemplateColumns: "repeat(5,1fr)",
    width: "99%",
    padding: "2px",
    border: "1px solid blue",
    borderRadius: "4px",
    backgroundColor: "#4050B5",
    margin: "auto 5px",
  },
  addShoppingCartIcon: {
    gridColumn: "1/1",
    border: "1px solid white",
    padding: "4px",
    borderRadius: "50%",
    alignSelf: "center",
    color: "white",
  },
  removeShoppingCartIcon: {
    border: "1px solid white",
    padding: "4px",
    borderRadius: "50%",
    alignSelf: "center",
    color: "white",
    fontWeight: "bolder",
  },
  removeShopingCartContainer: {
    display: "flex",
    flexFlow: "row",
    gridColumn: "5/-1",
    justifyContent: "center",
  },
  addShopingCartContainer: {
    display: "flex",
    flexFlow: "row",
    gridColumn: "1/1",
    justifyContent: "center",
  },
});

const GameCard = ({ products, setShoppingCart, shoppingCart,sessionId }) => {
  const classes = useStyles();

  async function handleAddToShoppingCart(product) {
    try {
      //await addProductToCart(shoppingCart);

      console.log(!shoppingCart.orderId)

      if (!shoppingCart.orderId) {
        const  {data:cart}  = await createCart({
          productId: product.id,
          quantity: 1,
          description: product.description,
          price: product.unitPrice,
          sessionId: sessionId,
          orderDate: new Date().toLocaleDateString(),
          inventoryId:product.inventoryId
        });

        console.log(cart);
        setShoppingCart({...cart});
        return;
      }

      const tempProduct =
        shoppingCart.Items?.length > 0 &&
        shoppingCart.Items?.filter((p) => p.inventoryId == product.inventoryId);

        console.log(shoppingCart.orderId);
      if (!tempProduct || tempProduct.length == 0) {
        const addedItem= await addItemToOrder( {
          productId: product.id,
          quantity: 1,
          description: product.description,
          unitPrice: product.price,
          orderId:shoppingCart.orderId,
          inventoryId:product.inventoryId
        });
        
        const tShoppingCart={...shoppingCart};

        tShoppingCart.Items.push({
          id: product.id,
          quantity: 1,
          description: product.description,
          price: product.price,
          orderId:addedItem.orderId,
          inventoryId:product.inventoryId
        })
        setShoppingCart( tShoppingCart);

        return;
      }

      if (tempProduct && tempProduct.length > 0) {
        await updateQuantity(shoppingCart.orderId, tempProduct[0].itemId);

        tempProduct[0].quantity++;
        setShoppingCart((scp) => [
          ...tempProduct,
          ...scp.filter((p) => p.id !== product.id),
        ]);
      }
    } catch (error) {
      console.error(error);
    }
  }

  function handleRemoveFromShoppingCart(product) {
    if (!shoppingCart && shoppingCart.length < 1) return;

    const tempProdct =
      shoppingCart.length > 0 && shoppingCart.filter((p) => p.id == product.id);
    if (!tempProdct || tempProdct.length == 0) return;

    if (tempProdct[0].quantity == 1) {
      setShoppingCart((scp) => [...scp.filter((p) => p.id !== product.id)]);
    } else {
      tempProdct[0].quantity--;
      setShoppingCart((scp) => [
        ...tempProdct,
        ...scp.filter((p) => p.id !== product.id),
      ]);
    }
  }

  return (
    <>
      {products &&
        products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card key={product.inventoryId} elevation={2} className={classes.cardHeight}>
              <CardHeader
                title={product.title+'-'+product.inventoryDescription}
                subheader={product.unitPrice}
              ></CardHeader>

              <CardContent className={classes.scroll}>
                <Typography>Description:</Typography>
                <Typography>{product.description}</Typography>
              </CardContent>
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
          </Grid>
        ))}
    </>
  );
};

export default GameCard;
