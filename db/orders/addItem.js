const { client } = require("../client");

async function addItem({ productId, orderId, quantity,unitPrice }) {
  try {
    const {
      rows: [item],
    } = await client.query(
      /*sql*/ `
        INSERT INTO "ordersItem"( "productId", "orderId","quantity","unitPrice" )
        VALUES ($1, $2,$3,$4)
        RETURNING *;
      `,
      [productId, orderId,quantity,unitPrice]
    );

    return item;
    console.log(item);
  } catch (error) {
    throw error;
  }
}

module.exports = { addItem };
