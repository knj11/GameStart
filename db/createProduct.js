const { client } = require("./index");

async function createProduct({
  id,
  title,
  console,
  description,
  price,
  picture,
  reviews,
}) {
  try {
    const {
      rows: [product],
    } = await client.query(
      /*sql*/ `
        INSERT INTO products(id, title, console, description, price, picture, reviews)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING *;
      `,
      [id, title, console, description, price, picture, reviews]
    );

    return product;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createProduct,
};
