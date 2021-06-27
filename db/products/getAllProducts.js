const { client } = require("../index");

async function getAllProducts() {
  try {
    const { rows: products } = await client.query(
      /*sql*/
      ` SELECT *
        FROM products 
      `
    );
    return products;
  } catch (error) {
    return error;
  }
}

module.exports = { getAllProducts };
