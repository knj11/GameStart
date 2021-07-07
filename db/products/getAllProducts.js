//For some reason when you require client from index.js file it does not work...
const { client } = require("../client");

async function getAllProducts() {
  try {
    const { rows: products } = await client.query(
      /*sql*/
      ` SELECT a.*,b.id "inventoryId",b.description "inventoryDescription"
        FROM products a JOIN inventory b on a.id=b."productId" ;
      `
    );
    return products;
  } catch (error) {
    return error;
  }
}

module.exports = { getAllProducts };
