import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { AuthDialog, AccountMenu } from ".";
import { Block } from "@material-ui/icons";
import { ShoppingCartContext } from "./App";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

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
    left: "-5px",
    top: "-5px",
    color: "white",
  },
  cartContainer: {
    display: "flex",
    flexFlow: "row nowrap",
  },
  linkClass: {
    display: "flex",
    flexFlow: "row nowrap",
    textDecoration: "none",
  },
});

const NavBar = ({ user, setUser, open, setOpen, sessionId }) => {
  const classes = useStyles();

  const { shoppingCart, setShoppingCart } = useContext(ShoppingCartContext);

  function getItemsCount() {
    const { Items: items } = shoppingCart;

    if (!items) return;

    const numberOfItems = items.reduce((acc, p) => +p.quantity + acc, 0);
    return numberOfItems;
  }

  return (
    <AppBar position="sticky">
      <Toolbar className={classes.flex}>
        <Typography
          style={{ color: "white", textDecoration: "none" }}
          component={Link}
          to={"/"}
          variant="h6"
        >
          GameStart
        </Typography>
        <div className={classes.cartContainer}>
          {shoppingCart && shoppingCart?.Items?.length > 0 ? (
            <>
              <Link to="/cart" className={classes.linkClass}>
                <ShoppingCartIcon className={classes.shoppingCartCount} />

                <span className={classes.shoppingCartCountNotifier}>
                  {getItemsCount()}
                </span>
              </Link>
            </>
          ) : (
            ""
          )}
        </div>
        <div>
          {user.id ? (
            <AccountMenu setUser={setUser} />
          ) : (
            <AuthDialog
              setUser={setUser}
              open={open}
              setOpen={setOpen}
              sessionId={sessionId}
              user={user}
              shoppingCart={shoppingCart}
              setShoppingCart={setShoppingCart}
            /> //Added by addis, user,sessionId
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
