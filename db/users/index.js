const getUserByUserName = require("./getUserByUserName");
const createUser = require("./createUser.js");

module.exports = {
  //...require("./createUser.js"),
  ...require("./getUser.js"),
  //...require("./getUserByUserName.js"),
  getUserByUserName,
  createUser,
};
