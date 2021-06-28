module.exports = { 
  ...require("./seedOrders"),
  ...require("./createOrderStatus"),
  ...require("./createNewOrder"),
  ...require("./addItem"),
  ...require("./updateOrderStatus"),
}
