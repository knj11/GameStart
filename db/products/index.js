module.exports = {
  ...require("./createProduct.js"),
  ...require("./seedProducts"),
  ...require("./getAllProducts"),
  ...require("./deleteProduct"),
  ...require("./updateProduct"),
};