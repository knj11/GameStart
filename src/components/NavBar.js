import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { AuthDialog, AccountMenu } from ".";
import { Block } from "@material-ui/icons";

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

const NavBar = ({ user, setUser, shoppingCart }) => {
  const classes = useStyles();

  function getItemsCount() {
    const numberOfItems = shoppingCart.reduce((acc, p) => +p.quantity + acc, 0);
    return numberOfItems;
  }
  return (
    <AppBar position="sticky">
      <Toolbar className={classes.flex}>
        <Typography variant="h6">GameStart</Typography>
        <div className={classes.cartContainer}>
          {shoppingCart && shoppingCart.length > 0 ? (
            <>
              <ShoppingCartIcon className={classes.shoppingCartCount} />
              {console.log(shoppingCart)}
              <span className={classes.shoppingCartCountNotifier}>
                {shoppingCart.length > 0 && getItemsCount()}
              </span>
            </>
          ) : (
            ""
          )}
        </div>
        <div>
          {user ? (
            <AccountMenu setUser={setUser} />
          ) : (
            <AuthDialog setUser={setUser} />
          )}
          {/* <Menu anchorEl={accountMenu} open={Boolean(accountMenu)} onClose={handleClose}>
            <MenuItem>Sign-up</MenuItem>
            <MenuItem>Log-In</MenuItem>
          </Menu> */}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
