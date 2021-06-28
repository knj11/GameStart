const { client } = require("../client");

async function getUnitPrice(productId) {
  try {

    const { rows: [{ unitPrice }] } = await client.query(`
      SELECT "unitPrice"
      FROM products
      WHERE id=$1;
    `, [productId])


    return unitPrice;
  } catch (error) {
    throw error;
  }
}

module.exports = { getUnitPrice };