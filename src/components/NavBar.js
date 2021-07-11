import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { AuthDialog, AccountMenu } from ".";
import { Block } from "@material-ui/icons";
import { ShoppingCartContext } from './App';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  flex: {
    display: "flex",
    justifyContent: "space-between",
  },
  shoppingCartCount: {
    borderRadius: "50%",
    padding: "4px",
    border: "1px Solid white",
    fontSize: "1.8rem",
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
    left: "-5px",
    top: "-5px",
  },
  cartContainer: {
    display: "flex",
    flexFlow: "row nowrap",
  },
});

const NavBar = ({ user, setUser }) => {
  const classes = useStyles();

  const { shoppingCart } = useContext(ShoppingCartContext)

  function getItemsCount() {
    const { Items: items } = shoppingCart

    if (!items) return

    const numberOfItems = items.reduce((acc, p) => +p.quantity + acc, 0);
    return numberOfItems;
  }

  return (
    <AppBar position="sticky">
      <Toolbar className={classes.flex}>
        <Typography style={{color: "white", textDecoration: "none"}} component={Link} to={'/'} variant="h6">GameStart</Typography>
        <div className={classes.cartContainer}>

          {shoppingCart && shoppingCart?.Items?.length > 0 ? (
            <>
              <ShoppingCartIcon className={classes.shoppingCartCount} />

              <span className={classes.shoppingCartCountNotifier}>
                {getItemsCount()}
              </span>
            </>
          ) : (
            ""
          )}
        </div>
        <div>
          {(user.id) ? <AccountMenu setUser={setUser} /> : <AuthDialog setUser={setUser} />}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
