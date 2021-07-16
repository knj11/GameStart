import React, { useState, useEffect } from "react";

import { Grid, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
import {
  GamePage,
  NavBar,
  AuthDialog,
  CheckOut,
  AddProduct,
  CustomerInfoPage,
} from "./index";

import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

import { fetchAllProducts, fetchUserCart } from "../api";
import { generateSessionId } from "../util";
import { useLocalStorage } from "./hooks";
import ShoppingCart from "./ShoppingCart";

const useStyles = makeStyles({
  gridContainer: {
    padding: "18px",
    width: "100%",
  },
  addButton: {
    position: "fixed",
    bottom: "30px",
    right: "20px",
  },
});

export const UserContext = React.createContext({});
export const ShoppingCartContext = React.createContext({});

const App = () => {
  const classes = useStyles();
  const [products, setProducts] = useState(false);
  const [user, setUser] = useLocalStorage("user", { id: "", roleId: "" });
  const [shoppingCart, setShoppingCart] = useState({});
  const [sessionId, setSessionId] = useLocalStorage(
    "sessionId",
    generateSessionId()
  );
  const [open, setOpen] = useState(false);

  const isAdmin = user.roleId === 1;

  const renderProductCards = (products) =>
    products &&
    products.map((product) => (
      <GameCard
        setProducts={setProducts}
        user={user}
        product={product}
        isAdmin={isAdmin}
      />
    ));

  useEffect(() => {
    fetchAllProducts()
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => console.log("Request Not Made"));
  }, []);

  useEffect(() => {
    fetchUserCart({ user, sessionId })
      .then(({ data }) => {
        const [cart] = data;
        console.log(sessionId);
        console.log(user.id, cart);
        setShoppingCart(cart);
        scrollBy;
      })
      .catch(console.error);
    if (!user.id) {
      const tShoppingCart = shoppingCart;
      setSessionId(generateSessionId());
      tShoppingCart?.Items?.splice(0);
      tShoppingCart ? (tShoppingCart.orderId = null) : "";
      setShoppingCart({});
    }
  }, [user]);

  return (
    <Router>
      <UserContext.Provider value={{ user, setUser }}>
        <ShoppingCartContext.Provider value={{ shoppingCart, setShoppingCart }}>
          <NavBar
            user={user}
            setUser={setUser}
            open={open}
            setOpen={setOpen}
            sessionId={sessionId}
          />
          <Switch>
            <Route path="/" exact>
              <Grid container spacing={3} className={classes.gridContainer}>
                <GamePage
                  products={products}
                  sessionId={sessionId}
                  setProducts={setProducts}
                  user={user}
                />
              </Grid>

              {isAdmin && (
                <AddProduct setProducts={setProducts}/>
              )}
            </Route>
            <Route path="/cart">
              <ShoppingCart
                sessionId={sessionId}
                user={user}
                setUser={setUser}
                setOpen={setOpen}
              />
            </Route>
            <Route path="/checkout">
              <CheckOut
                sessionId={sessionId}
                user={user}
                setUser={setUser}
                setOpen={setOpen}
              />
            </Route>
            <Route exact path="/users">
              <CustomerInfoPage />
            </Route>
          </Switch>
        </ShoppingCartContext.Provider>
      </UserContext.Provider>
    </Router>
  );
};

export default App;
