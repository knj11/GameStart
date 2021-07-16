const { client } = require("../client");

async function getAllUsers() {
  try {
    const { rows: users } = await client.query(`
      SELECT id, "firstName", "lastName", "email", "roleId"
      FROM users;
    `)
    return users
  } catch (error) {
    console.log("Trouble getting all users");
    throw error
  }
}

module.exports = { getAllUsers }