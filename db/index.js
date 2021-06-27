module.exports = {
  ...require("./createProduct"),
  ...require("./products/getAllProducts"),
  ...require("./client"),
  ...require("./users"),
  ...require("./products"),
};
