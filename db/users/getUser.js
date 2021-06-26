const bcrypt = require("bcrypt");
const getUserByUserName = require("./getUserByUserName");

async function getUser({ username, password }) {
  try {
    const user = await getUserByUserName(username);
    const hashedPassword = user.password;
    const passwordsMatch = await bcrypt.compare(password, hashedPassword);

    if (passwordsMatch) {
      delete user.password;
      return user;
    }
  } catch (error) {
    throw error;
  }
}

module.exports = getUser;
