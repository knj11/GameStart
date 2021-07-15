import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import { CenterFocusStrong, FullscreenExit } from "@material-ui/icons";
import { Button } from "@material-ui/core";

import { ShoppingCartContext } from "./App";
import {
  handleAddToShoppingCartCreator,
  handleRemoveFromShoppingCartRemover,
} from ".";
import { createCart, addItemToOrder, removeItemFromOrder } from "../api";
import gameImage from "../img/Marvels-Spider-Man-Miles-Morales-Ultimate-Edition.webp";

import { AuthDialog, AccountMenu } from ".";

const useStyles = makeStyles({
  table: {
    maxWidth: "80%",
    margin: "0 auto",
  },
  priceHolder: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  EditCircleStyles: {
    cursor: "pointer",
    hover: {
      color: "blue",
    },
    quantityInput: {
      width: "10rem",
    },
  },
  cartBar: {
    display: "flex",
    justifyContent: "center",
    margin: "10px 0",
  },
  checkOutBtn: {
    margin: "0 0 0 10px",
  },
});

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Cupcake", 305, 3.7, 67, 4.3),
//   createData("Gingerbread", 356, 16.0, 49, 3.9),
// ];

export default function ShoppingCart({ sessionId, user, setUser, setOpen }) {
  const classes = useStyles();
  const { shoppingCart, setShoppingCart } = useContext(ShoppingCartContext);
  const history = useHistory();
  const handleAddToShoppingCart = handleAddToShoppingCartCreator({
    addItemToOrder,
    createCart,
    shoppingCart,
    setShoppingCart,
    sessionId,
  });

  const handleRemoveFromShoppingCart = handleRemoveFromShoppingCartRemover({
    shoppingCart,
    setShoppingCart,
    removeItemFromOrder,
    sessionId,
  });
  const handleCheckout = () => {
    console.log(!user.id);
    if (!user.id) {
      setOpen(true);
      return;
    } else {
      history.push("/checkout");
    }
  };

  return (
    <>
      <div className={classes.cartBar}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push("/")}
        >
          &lt;&lt;Back
        </Button>
        <Button
          className={classes.checkOutBtn}
          variant="contained"
          color="primary"
          onClick={() => handleCheckout()}
        >
          Check Out
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left" style={{ width: "" }}></TableCell>
              <TableCell>Description</TableCell>
              <TableCell align="left">Plat Form</TableCell>
              <TableCell align="center">Quantity</TableCell>
              <TableCell align="center">Unit Price</TableCell>
              <TableCell align="center">Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {shoppingCart?.Items?.map((sCI) => (
              <TableRow key={sCI.product.inventoryId}>
                <TableCell align="center" width="10rem">
                  <img
                    src={gameImage}
                    style={{ width: "10rem", margin: "0", padding: "0" }}
                  />
                </TableCell>
                <TableCell
                  key={sCI.product.inventoryId}
                  align="left"
                  style={{ width: "40%" }}
                >
                  {sCI.product.description}
                </TableCell>
                <TableCell align="left" style={{ width: "20%" }}>
                  {sCI.product.inventoryDescription}
                </TableCell>
                <TableCell align="right">
                  <span className={classes.priceHolder}>
                    <AddCircleOutlineIcon
                      className={classes.EditCircleStyles}
                      onClick={() => handleAddToShoppingCart(sCI.product)}
                    />

                    <TextField
                      id="outlined-number"
                      label="Number"
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="outlined"
                      value={sCI.quantity}
                      className={classes.quantityInput}
                    />

                    <RemoveCircleOutlineIcon
                      onClick={() => handleRemoveFromShoppingCart(sCI.product)}
                      className={classes.EditCircleStyles}
                    />
                  </span>
                </TableCell>
                <TableCell align="center">{sCI.unitPrice}</TableCell>
                <TableCell align="center">
                  {(sCI.quantity * sCI.unitPrice).toFixed(2)}
                </TableCell>
                {/*  <TableCell component="th" scope="row">
                {row.name}
              </TableCell><TableCell align="right">{sCI.carbs}</TableCell>
              <TableCell align="right">{sCI.protein}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
