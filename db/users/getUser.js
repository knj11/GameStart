const bcrypt = require("bcrypt");
const { getUserByEmail } = require("./getUserByEmail");

async function getUser({ email, password }) {
  try {
    const user = await getUserByEmail(email);
    const hashedPassword = user.hashedPassword;
    const passwordsMatch = await bcrypt.compare(password, hashedPassword);

    if (passwordsMatch) {
      delete user.hashedPassword;
      return user;
    } else {
      return null
    }
  } catch (error) {
    throw error;
  }
}

module.exports = { getUser };
