const { client } = require("../client");
const bcrypt = require("bcrypt");

async function createUser({
  firstName,
  lastName,
  description,
  email,
  password,
  roleId,
}) {
  SALT_COUNT = 10;
  const hashedPassword = await bcrypt.hash(password, SALT_COUNT);

  try {
    const {
      rows: [user],
    } = await client.query(
      `
      INSERT INTO users("firstName", "lastName", description, email, "hashedPassword", "roleId" )
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *
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
