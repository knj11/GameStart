const { client } = require("../client");

async function createNewOrder({ userId, sessionId, totalAmount }) {
  try {
    console.log({ userId, sessionId }, "~~~~~~~~~~~~~~~~~~~from deep");
    const {
      rows: [order],
    } = await client.query(
      /*sql*/ `
        INSERT INTO orders( "userId","sessionId","totalAmount" )
        VALUES ($1,$2,$3)
        RETURNING *;
      `,
      [userId, sessionId, totalAmount]
    );

    return order;
  } catch (error) {
    console.log("createNewOrder....", error);
    throw error;
  }
}
module.exports = { createNewOrder };
