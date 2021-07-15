import axios from "axios";
async function handleToken(token, addresses, shoppingCart) {
  console.log(shoppingCart);
  try {
    const response = await axios.post("/api/orders/checkout", {
      token,
      shoppingCart,
    });
    const { status } = response.data;
    console.log(status);
    return status;
  } catch (error) {
    console.log(error);
    return error;
  }
}
export default handleToken;
