const getUserByUserName = require("./getUserByUserName");

module.exports = {
  ...require("./createUser.js"),
  ...require("./getUser.js"),
  //...require("./getUserByUserName.js"),
  getUserByUserName,
};
