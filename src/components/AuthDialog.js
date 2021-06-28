import React, { useState } from 'react'
import { Dialog, DialogTitle, IconButton, DialogContentText, DialogContent, Button, DialogActions, Link } from '@material-ui/core'
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import { TextField } from '@material-ui/core';

import { LoginForm, SignUpForm } from './'

const AuthDialog = ({ setUser }) => {
  const [open, setOpen] = useState(false);
  const [isNewUser, setIsNewUser] = useState(false)

  const handleClose = () => {
    setOpen(false)
  };

  const handleSignUpOpen = () => {
    setOpen(true)
    setIsNewUser(true)
  }

  const handleLogInOpen = () => {
    setOpen(true)
    setIsNewUser(false)
  }


  const toggleForm = () => {
    (isNewUser) ? setIsNewUser(false) : setIsNewUser(true)
  }


  return (
    <>
      <IconButton id="Login-Button" onClick={handleLogInOpen} color="inherit">
        <PersonOutlineIcon />
      </IconButton>
      <IconButton id="Sign-Up-Button" onClick={handleSignUpOpen} color="inherit">
        <PersonAddIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id='auth-form-dialog-title'>
          {(isNewUser) ? 'Sign Up' : 'Login'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            For you to enjoy a richer shopping experience please {(isNewUser) ? 'Sign Up or ' : 'Login or '}
            <Link
              component="button"
              onClick={toggleForm}
            >
              {(isNewUser) ? 'Login' : 'Sign Up'}
            </Link>
          </DialogContentText>
          {(isNewUser) ? <SignUpForm handleClose={handleClose} setUser={setUser} />: <LoginForm handleClose={handleClose} setUser={setUser} />}
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={() => (isNewUser) ? signUpSubmit() : logInSubmit()} color="primary">
            Submit
          </Button>
        </DialogActions> */}
      </Dialog>
    </>
  )
}

export default AuthDialog