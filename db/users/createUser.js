const { client } = require("../client");
const bcrypt = require("bcrypt");
const { SALT_COUNT } = process.env

async function createUser({
  firstName,
  lastName,
  description,
  email,
  password,
  roleId,
}) {
  const hashedPassword = await bcrypt.hash(password, SALT_COUNT);

  try {
    const {
      rows: [user],
    } = await client.query(
      `
      INSERT INTO users("firstName", "lastName", description, email, "hashedPassword", "roleId" )
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *;
    `,
      [firstName, lastName, description, email, hashedPassword, roleId]
    );

    if (user.hashedPassword) {
      delete user.hashedPassword;
    }

    return user;
  } catch (error) {
    throw error;
  }
}

module.exports = { createUser };
