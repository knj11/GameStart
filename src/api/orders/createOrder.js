import axios from "axios";

const API_URL = "api/orders";

export function createOrder(user, shoppinCartBody) {
  //

  try {
    const result = axios.post(
      "/api/orders/",
      {
        orderedItem,
      },
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    return result;
  } catch (error) {
    return error;
  }
}
