import React, { useState, useEffect } from "react";
import { Grid, Fab } from "@material-ui/core"
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from "@material-ui/core/styles"
import { GameCard, NavBar, AuthDialog } from "./index"
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

import { fetchAllProducts, fetchUserCart } from "../api";
import { generateSessionId } from "../util";
import { useLocalStorage } from "./hooks";


const useStyles = makeStyles({
  gridContainer: {
    padding: "18px",
    width: "100%",
  },
  addButton: {
    position: "fixed",
    bottom: '30px',
    right: '20px',
  }
})

export const ShoppingCartContext = React.createContext({})
export const UserContext = React.createContext({})

const App = () => {
  const classes = useStyles();
  const [products, setProducts] = useState(false);
  const [user, setUser] = useLocalStorage("user", { id: '', roleId: '' });
  const [shoppingCart, setShoppingCart] = useState({});
  const [sessionId] = useLocalStorage("sessionId", generateSessionId());

  const isAdmin = (user.roleId === 1)

  //const renderProductCards = (products) => (products) && products.map((product) => <GameCard setProducts={setProducts} user={user} product={product} isAdmin={isAdmin} />)

  useEffect(() => {
    fetchAllProducts()
      .then((response) => {
        setProducts(response);
        console.log(response);
      })
      .catch((error) => console.log("Request Not Made"));
  }, []);

  useEffect(() => {
    fetchUserCart({ user, sessionId })
      .then(({ data }) => {
        const [cart] = data
        console.log(cart);
        setShoppingCart(cart);
        scrollBy
      })
      .catch(console.error);
  }, []);
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
      <UserContext.Provider value={{ user, setUser }}>
        <ShoppingCartContext.Provider value={{ shoppingCart, setShoppingCart }}>
          <NavBar user={user} setUser={setUser} />
          <Switch>
            <Route path="/" exact>
              <Grid container spacing={3} className={classes.gridContainer}>

                <GameCard
                  setProducts={setProducts}
                  products={products}
                  sessionId={sessionId}
                />
              </Grid>
              {(isAdmin) &&
                <Fab className={classes.addButton} color="primary" >
                  <AddIcon />
                </Fab>
              }
            </Route>
            <Route path="/cart">
              <h1>Hello World</h1>
            </Route>
          </Switch>
        </ShoppingCartContext.Provider>
      </UserContext.Provider>
    </Router>
  );
};

export default App;
