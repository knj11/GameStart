import React, { useState } from 'react'
import { Dialog, DialogTitle, IconButton, DialogContentText, DialogContent, Button, DialogActions } from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { TextField } from '@material-ui/core';

const AuthDialog = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <IconButton onClick={handleClickOpen} color="inherit">
        <AccountCircleIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id='auth-form-dialog-title'>
          Login
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            For you to enjoy a richer shopping experience please Log In or Sign Up
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Username"
            type="text"
            fullWidth
          />
          <TextField
            style={{"margin-top": "8px"}}
            autoFocus
            margin="dense"
            id="name"
            label="Password"
            type="password"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default AuthDialog