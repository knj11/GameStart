const { client } = require("./client");

async function createProduct({
  id,
  title,
  console,
  description,
  price,
  picture,
}) {
  try {
    const {
      rows: [product],
    } = await client.query(
      /*sql*/ `
        INSERT INTO products(id, title, console, description, price, picture)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *;
      `,
      [id, title, console, description, price, picture]
    );

    return product;
  } catch (error) {
    throw error;
  }
}

module.exports = { createProduct };
