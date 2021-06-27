const getUserByUserName = require("./getUserByUserName");
import seedUsers from "./seed";
const createUser = require("./createUser.js");
const getUser = require("./getUser");

module.exports = {
  //...require("./createUser.js"),
  //...require("./getUser.js"),
  //...require("./getUserByUserName.js"),
  getUserByUserName,
  createUser,
  getUser,
  seedUsers,
};
