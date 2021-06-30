const { client } = require("../client");

async function createNewOrder({ userId }) {
  try {
    const {
      rows: [order],
    } = await client.query(
      /*sql*/ `
        INSERT INTO orders( "userId" )
        VALUES ($1)
        RETURNING *;
      `,
      [userId]
    );

    return order;
  } catch (error) {
    throw error;
  }
}

module.exports = { createNewOrder };
