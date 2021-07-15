const { client } = require("../client");
const updateOrderStatusDb = async ({ orderId }) => {
  try {
    const {
      rows: [updatedOrder],
    } = await client.query(
      /*sql*/ `UPDATE orders set "orderStatusId"=2 WHERE "id"=$1`,
      [orderId]
    );
    return updatedOrder;
  } catch (error) {
    return error;
  }

  return updatedOrder;
};

module.exports = { updateOrderStatusDb };
