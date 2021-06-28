import React, { useState } from 'react'
import { Dialog, DialogTitle, IconButton, DialogContentText, DialogContent, Button, DialogActions, Link } from '@material-ui/core'
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import { TextField } from '@material-ui/core';

const AuthDialog = ({ setUser }) => {
  const [open, setOpen] = useState(false);
  const [isNewUser, setIsNewUser] = useState(false)
  const [authForm, setAuthForm] = useState({ username: '', password: '', "verifyPassword": '', "errorMessage": '' })

  const handleClose = () => {
    setAuthForm({...authForm, username: '', password: '', "verifyPassword": '', "errorMessage": '' })
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

  const clearFormValues = () => {
    document.getElementById("username").value = ''
    document.getElementById("password").value = ''
  }

  const toggleForm = () => {
    (isNewUser) ? setIsNewUser(false) : setIsNewUser(true)
    clearFormValues()
    setAuthForm({...authForm, username: '', password: '', "verifyPassword": '', "errorMessage": '' })
  }

  const handleAuthFormSubmission = async (e) => {
    e.preventDefault()
    const { username, password, verifyPassword } = authForm
    try {
      if (!(password === verifyPassword)) throw "Passwords do not match"
    } catch (error) {
      console.log(error)
      setAuthForm({...authForm, errorMessage: error})
    }
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
          <form onSubmit={handleAuthFormSubmission}>
            <DialogContentText>
              For you to enjoy a richer shopping experience please {(isNewUser) ? 'Sign Up or ' : 'Login or '}
              <Link
                component="button"
                onClick={toggleForm}
              >
                {(isNewUser) ? 'Login' : 'Sign Up'}
              </Link>
            </DialogContentText>
            <TextField
              required
              margin="dense"
              id="username"
              label={(isNewUser) ? 'Create Username' : 'Username'}
              type="text"
              onChange={(e) => setAuthForm({ ...authForm, username: e.target.value })}
              fullWidth
            />
            <TextField
              required
              style={{ "margin-top": "8px" }}
              margin="dense"
              id="password"
              label="Password"
              type="password"
              onChange={(e) => setAuthForm({ ...authForm, password: e.target.value })}
              fullWidth
            />
            {(isNewUser) && <TextField
              required
              style={{ "margin-top": "8px" }}
              margin="dense"
              id="verifyPassword"
              label="Re-Enter Password"
              type="password"
              onChange={(e) => setAuthForm({ ...authForm, "verifyPassword": e.target.value })}
              fullWidth
            />}
            {(authForm.errorMessage) && `${authForm.errorMessage}`}
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button type='submit' color="primary">
                Submit
              </Button>
            </DialogActions>
          </form>
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