import React, { useState } from 'react'
import { Menu, IconButton, MenuItem } from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const AccountMenu = ({ setUser }) => {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (e) => setAnchorEl(e.currentTarget)
  const handleClose = () => setAnchorEl(null)

  const handleSignOut = () => setUser({ id: '', roleId: '' })

  return (
    <>
      <IconButton id="Account-Menu-Button" onClick={handleClick} color="inherit">
        <AccountCircleIcon />
      </IconButton>
      <Menu
        id="account-menu"
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Account</MenuItem>
        <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
      </Menu>
    </>
  )
}

export default AccountMenu