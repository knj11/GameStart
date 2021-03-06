import React, { useContext } from "react";
import { Card, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { UserContext } from "./App";
import { UserCardView, AdminCardView } from ".";

const useStyles = makeStyles({
  gridContainer: {
    padding: "18px",
  },
  cardgrid: {
    //display: "grid",
    //gridTemplateColumns: repeat("auto-fit", minmax("300px", "1fr")), ///"1fr 1fr 1fr", flexDirection: "column",
    justifyContent: "space-between",
    width: "80%",
    margin: "0 auto",
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
  cardHeight: {
    display: "flex",
    flexFlow: "row",
  },
});

const GamePage = ({ products, setProducts, sessionId }) => {
  const classes = useStyles();
  const { user } = useContext(UserContext);

  const isAdmin = user.roleId === 1;

  return (
    <Grid
      item
      className={classes.cardgrid}
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
        gridGap: "20px",
      }}
    >
      {isAdmin ? (
        products &&
        products.map((product) => (
          <Card key={product.id} elevation={2} className={classes.cardHeight}>
            {/*Break the cardActions into 2 components. 1 for Admin, one for standard user*/}
            <AdminCardView setProducts={setProducts} product={product} />)
          </Card>
        ))
      ) : (
        <UserCardView products={products} sessionId={sessionId} />
      )}
    </Grid>
  );
};

export default GamePage;
