import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core';
import { AppBar, Toolbar, Typography } from "@material-ui/core"

import { AuthDialog, AccountMenu } from '.';

const useStyles = makeStyles({
  flex: {
    display: "flex",
    justifyContent: "space-between",
  }
})

const NavBar = ({ user, setUser }) => {
  const classes = useStyles()


  return (
    <AppBar position="sticky">
      <Toolbar className={classes.flex}>
        <Typography variant="h6">
          GameStart
        </Typography>
        <div>
          {(user) ? <AccountMenu setUser={setUser} /> : <AuthDialog setUser={setUser} />}
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