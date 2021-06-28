const { client } = require("../client");

const { getUnitPrice } = require('../products')

async function addToOrderTotal(unitPrice, orderId) {
  try {
    const { rows: [orderTotal] } = await client.query(`
      UPDATE orders SET "totalAmount" = "totalAmount" + $1
      WHERE id=$2;
    `, [unitPrice, orderId])
    //return orderTotal
  } catch (error) {
    throw error
  }
}

async function addItem({ productId, orderId }) {
  try {
    const {
      rows: [item],
    } = await client.query(
      /*sql*/ `
        INSERT INTO "ordersItem"( "productId", "orderId" )
        VALUES ($1, $2)
        RETURNING *;
      `,
      [productId, orderId]
    );

    const unitPrice = await getUnitPrice(productId)

    await addToOrderTotal(unitPrice, orderId)

    return item;
  } catch (error) {
    throw error;
  }
}

module.exports = { addItem };
