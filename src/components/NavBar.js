import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from "@material-ui/core"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { AuthDialog } from '.';

const useStyles = makeStyles({
  flex: {
    display: "flex",
    justifyContent: "space-between",
  }
})

const NavBar = () => {
  const classes = useStyles()
  

  return (
    <AppBar position="sticky">
      <Toolbar className={classes.flex}>
        <Typography variant="h6">
          GameStart
        </Typography>
        <div>
          <AuthDialog />
          {/* <Menu anchorEl={accountMenu} open={Boolean(accountMenu)} onClose={handleClose}>
            <MenuItem>Sign-up</MenuItem>
            <MenuItem>Log-In</MenuItem>
          </Menu> */}
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar