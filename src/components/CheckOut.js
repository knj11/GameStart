import StripeCheckout from "react-stripe-checkout";

import axios from "axios";

import { Button, useRadioGroup } from "@material-ui/core";
import { useContext, useState } from "react";
import { ShoppingCartContext } from "./App";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

import gameImage from "../img/Marvels-Spider-Man-Miles-Morales-Ultimate-Edition.webp";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    maxWidth: "50%",
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
  cartBar: {
    display: "flex",
    justifyContent: "center",
    margin: "10px 0",
  },
});
const CheckOut = ({ user }) => {
  const classes = useStyles();
  const history = useHistory();
  const { shoppingCart, setShoppingCart } = useContext(ShoppingCartContext);
  const [successful, setSuccessful] = useState(false);
  async function handleToken(token, addresses) {
    try {
      token.email = user.email;
      const response = await axios.post("/api/orders/checkout", {
        token,
        shoppingCart,
      });
      const { status } = response.data;

      if (status === "success") {
        const tShoppingCart = { ...shoppingCart };
        tShoppingCart.orderId = null;
        tShoppingCart.Items.splice(0);
        setShoppingCart({ ...tShoppingCart });
        //history.push("/");
        setSuccessful(true);
      } else {
        console.log(status);
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  const getShoppingCartTotal = () => {
    let totalSum = shoppingCart?.Items?.reduce(
      (acc, item) => acc + +item.quantity * +item.unitPrice,
      0
    );

    return totalSum;
  };
  return (
    <>
      <div className={classes.cartBar}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push("/")}
        >
          &lt;&lt;Home
        </Button>
      </div>

      {successful ? (
        <h1 style={{ margin: "0 auto", width: "60%" }}>
          Your Order Processed Successfully. Thank You for purchasing our games.
        </h1>
      ) : (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left" style={{ width: "" }}></TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center">
                  <StripeCheckout
                    stripeKey="pk_test_51JCQqeHpO8i5aJSdtj1Vxoct3T82n0qFjzpNmeeUWaeTI5pkmobLPh3oNiwNFgeHhvnLJH8fEQyhFsKpjl4vYg6z00UMmaxetL"
                    token={handleToken}
                    email={user.email}
                    amount={100 * getShoppingCartTotal()?.toFixed(2)}
                    name="GmeStart Checkout"
                    billingAddress
                    shippingAddress
                  >
                    <Button color="primary" variant="contained">
                      Pay- $ {getShoppingCartTotal()?.toFixed(2)}
                    </Button>
                    {console.log(getShoppingCartTotal())}
                  </StripeCheckout>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left" style={{ width: "" }}></TableCell>
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

                  <TableCell align="center">{sCI.quantity}</TableCell>
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
      )}
    </>
  );
};

export default CheckOut;
