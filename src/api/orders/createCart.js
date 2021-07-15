import axios from "axios";

export async function createCart({
  user,
  productId,
  quantity,
  description,
  price,
  sessionId,
  orderDate,
  inventoryId,
}) {
  const header = user.token
    ? {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      }
    : "";

  try {
    const cart = await axios.post(
      "api/orders",
      {
        productId,
        quantity,
        description,
        price,
        sessionId,
        orderDate,
        inventoryId,
      },
      header
    );

    return cart;
  } catch (error) {
    return error;
  }
}
