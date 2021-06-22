const { client } = require("./index");

function getAllProducts() {
  try {
    const { rows: products } = client.query(
      /*sql*/
      ` SELECT *
        FROM products 
      `
    );
  } catch (error) {
    return error;
  }
}

module.exports = getAllProducts;
