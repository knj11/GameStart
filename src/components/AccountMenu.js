import React, { useState, useContext } from "react";
import { Menu, IconButton, MenuItem } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { UserContext } from "./App";

const AccountMenu = ({ setUser }) => {
  const { user } = useContext(UserContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const history = useHistory();

  const handleClick = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleSignOut = () => {
    setUser({ id: "", roleId: "" });
    history.push("/");
  };

  const isAdmin = user.roleId === 1;
  return (
    <>
      <IconButton
        id="Account-Menu-Button"
        onClick={handleClick}
        color="inherit"
      >
        <AccountCircleIcon />
      </IconButton>
      <Menu
        id="account-menu"
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Account</MenuItem>
        {isAdmin && (
          <MenuItem
            component={Link}
            style={{ color: "black", textDecoration: "none" }}
            to="/users"
            onClick={handleClose}
          >
            Users Page
          </MenuItem>
        )}
        <MenuItem
          component={Link}
          style={{ color: "black", textDecoration: "none" }}
          to="/"
          onClick={handleSignOut}
        >
          Sign Out
        </MenuItem>
      </Menu>
    </>
  );
};

export default AccountMenu;
