import React, { useContext } from "react";
import {
  Card,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { UserContext } from "./App";
import { UserCardView, AdminCardView } from ".";



const useStyles = makeStyles({
  gridContainer: {
    padding: "18px",
  },
  cardHeight: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "400px",
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
});


const GamePage = ({ products, setProducts, sessionId }) => {
  const classes = useStyles();
  const { user } = useContext(UserContext);

  const isAdmin = (user.roleId === 1)

  return (
    <>
      {products &&
        products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card key={product.id} elevation={2} className={classes.cardHeight}>
              {/*Break the cardActions into 2 components. 1 for Admin, one for standard user*/}
              {(isAdmin) ? <AdminCardView setProducts={setProducts} product={product} /> : <UserCardView product={product} sessionId={sessionId} />}
            </Card>
          </Grid>
        ))}
    </>
  );
};

export default GamePage;
