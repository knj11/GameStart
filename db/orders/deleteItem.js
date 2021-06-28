const { client } = require("../client");

async function deleteItem({ orderItemId }) {
  try {
    const {
      rows: [orderItem],
    } = await client.query(
      /*sql*/ `
        DELETE FROM "ordersItem"
        WHERE id=$1;
      `,
      [orderItemId]
    );

    //return orderItem;
  } catch (error) {
    throw error;
  }
}

module.exports = { deleteItem };