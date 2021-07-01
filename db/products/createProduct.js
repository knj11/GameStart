const { client } = require("../client");

async function createProduct({ title, description, picture, unitPrice }) {
  try {
    const {
      rows: [product],
    } = await client.query(
      /*sql*/ `
        INSERT INTO products( title, description,  picture, "unitPrice")
        VALUES ($1, $2, $3, $4)
        RETURNING *;
      `,
      [title, description, picture, unitPrice]
    );

    return product;
  } catch (error) {
    throw error;
  }
}

module.exports = { createProduct };
