const { client } = require("../client");

async function getUserByEmail(email) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
      SELECT * 
      FROM users
      WHERE email = $1;
    `,
      [email]
    );

    return user;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getUserByEmail,
};
