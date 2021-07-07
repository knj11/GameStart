const { client } = require("../client");

async function updateOrderStatus({ orderStatusId, orderId }) {
  try {
    const {
      rows: [order],
    } = await client.query(
      /*sql*/ `
        UPDATE orders SET "orderStatusId"=$1
        WHERE id=$2;
      `,
      [orderStatusId, orderId]
    );

    //return order;
  } catch (error) {
    throw error;
  }
}

module.exports = { updateOrderStatus };