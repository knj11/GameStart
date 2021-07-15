import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  IconButton,
  DialogContentText,
  DialogContent,
  Link,
} from "@material-ui/core";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";

import { LoginForm, SignUpForm } from "./";
import ShoppingCart from "./ShoppingCart";

const AuthDialog = ({
  setUser,
  setOpen,
  open,
  user,
  sessionId,
  setShoppingCart,
  shoppingCart,
}) => {
  const [isNewUser, setIsNewUser] = useState(false);

  const handleClose = () => setOpen(false);
  const toggleForm = () =>
    isNewUser ? setIsNewUser(false) : setIsNewUser(true);

  const handleSignUpOpen = () => {
    setOpen(true);
    setIsNewUser(true);
  };

  const handleLogInOpen = () => {
    setOpen(true);
    setIsNewUser(false);
  };

  return (
    <>
      <IconButton id="Login-Button" onClick={handleLogInOpen} color="inherit">
        <PersonOutlineIcon />
      </IconButton>
      <IconButton
        id="Sign-Up-Button"
        onClick={handleSignUpOpen}
        color="inherit"
      >
        <PersonAddIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="auth-form-dialog-title">
          {isNewUser ? "Sign Up" : "Login"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            For you to enjoy a richer shopping experience please{" "}
            {isNewUser ? "Sign Up or " : "Login or "}
            <Link component="button" onClick={toggleForm}>
              {isNewUser ? "Login" : "Sign Up"}
            </Link>
          </DialogContentText>
          {isNewUser ? (
            <SignUpForm handleClose={handleClose} setUser={setUser} />
          ) : (
            <LoginForm
              handleClose={handleClose}
              setUser={setUser}
              user={user}
              sessionId={sessionId}
              setShoppingCart={setShoppingCart}
              shoppingCart={shoppingCart}
            /> //user and sessionId props added by Addis
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AuthDialog;
