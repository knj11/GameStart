import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from "@material-ui/core"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles({
  flex: {
    display: "flex",
    justifyContent: "space-between",
  }
})

const NavBar = () => {
  const classes = useStyles()

  const [accountMenu, setAccountMenu] = useState(null)

  const handleAccountMenu = (e) => setAccountMenu(e.currentTarget)
  const handleClose = (e) => setAccountMenu(null)
  

  return (
    <AppBar position="sticky">
      <Toolbar className={classes.flex}>
        <Typography variant="h6">
          GameStart
        </Typography>
        <div>
          <IconButton onClick={handleAccountMenu} color="inherit">
            <AccountCircleIcon />
          </IconButton>
          <Menu anchorEl={accountMenu} open={Boolean(accountMenu)} onClose={handleClose}>
            <MenuItem>Sign-up</MenuItem>
            <MenuItem>Log-In</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar