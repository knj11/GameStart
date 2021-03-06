module.exports = {
  ...require("./seedOrders"),
  ...require("./createOrderStatus"),
  ...require("./createNewOrder"),
  ...require("./addItem"),
  ...require("./updateOrderStatus"),
  ...require("./deleteItem"),
  ...require("./createCartStructure"),
  ...require("./getOrderBySessionId"),
  ...require("./getItemFromInventory"),
  ...require("./addToOrderTotal"),
  ...require("./addItemBackToInventory"),
  ...require("./updateOrderStatusDb"),
};
