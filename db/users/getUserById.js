const { client } = require("../client");

async function getUserById(id) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
      SELECT * 
      FROM users
      WHERE id = $1;
    `,
      [id]
    );

    return user;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getUserById,
};