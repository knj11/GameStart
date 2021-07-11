import axios from "axios";

const API_URL = "api/orders";

export function createOrder(shoppinCartBody) {
  //
  try {
    const result = axios.post("/api/orders/", {
      body: orderedItem,
    });
    return result;
  } catch (error) {
    return error;
  }
}
