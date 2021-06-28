const { client } = require("../client");

async function createRole({ name, description }) {
  try {
    const { rows: [role] } = await client.query(`
      INSERT INTO roles(name, description)
      VALUES ($1, $2)
      RETURNING *;
    `, [name, description])
    return role
  } catch (error) {
    throw error
  }
}

module.exports = { createRole }