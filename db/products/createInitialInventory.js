const { client } = require("../client");

async function addInventory({ quantity, productId, consoleId, description }) {
  try {
    const {
      rows: [inventory],
    } = await client.query(
      `
      INSERT INTO inventory(quantity, "productId", "consoleId", description)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `,
      [quantity, productId, consoleId, description]
    );
  } catch (error) {
    throw error;
  }
}

module.exports = { addInventory };
