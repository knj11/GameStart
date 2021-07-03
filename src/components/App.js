import React, { useState, useEffect } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { GameCard, NavBar, AuthDialog } from "./index";
import { fetchAllProducts, fetchUserCart } from "../api";
import { generateSessionId } from "../util";
import { useLocalStorage } from "./hooks";

const useStyles = makeStyles({
  gridContainer: {
    padding: "18px",
    width: "100%",
  },
});

const App = () => {
  const classes = useStyles();
  const [products, setProducts] = useState(false);
  const [user, setUser] = useLocalStorage("user", "");
  const [shoppingCart, setShoppingCart] = useState([]);
  const [sessionId] = useLocalStorage("sessionId", generateSessionId());

  useEffect(() => {
    fetchAllProducts()
      .then((response) => {
        setProducts(response);
        console.log(response);
      })
      .catch((error) => console.log("Request Not Made"));
  }, []);

  // useEffect(() => {
  //   fetchUserCart({ user, sessionId })
  //     .then((response) => {
  //       setShoppingCart(response);
  //     })
  //     .catch(console.error);
  // }, []);
  // const renderProductCards = (products) =>
  //   products &&
  // products.map((product) => (
  //   <GameCard
  //     product={product}
  //     shoppingCart={shoppingCart}
  //     setShoppingCart={setShoppingCart}
  //   />
  // ));

  return (
    <Router>
      <NavBar user={user} setUser={setUser} shoppingCart={shoppingCart} />
      <Switch>
        <Route path="/" exact>
          <Grid container spacing={3} className={classes.gridContainer}>
            <GameCard
              products={products}
              shoppingCart={shoppingCart}
              setShoppingCart={setShoppingCart}
              sessionId={sessionId}
            />
          </Grid>
        </Route>
        <Route path="/cart">
          <h1>Hello World</h1>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
