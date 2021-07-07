const { client } = require("../client");

async function createOrderStatus({ name, description }) {
  try {
    const {
      rows: [orderStatus],
    } = await client.query(
      /*sql*/ `
        INSERT INTO "orderStatus"( name, description )
        VALUES ($1, $2)
        RETURNING *;
      `,
      [name, description]
    );

    return orderStatus;
  } catch (error) {
    throw error;
  }
}

module.exports = { createOrderStatus };
