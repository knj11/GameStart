const seedOrderStatus = [
  {
    name: "In Progress",
    description:
      "Customer is adding products to Shopping Cart but has not placed order yet",
  },
  {
    name: "Completed",
    description: "Customer has placed an order for all items in thier shopping cart"
  },
  {
    name: "Deleted",
    description: "Shopping cart session was deleted by the customer",
  },
];

const seedInitalOrders = [
  {
    userId: 1,
  },
  {
    userId: 2,
  },
  {
    userId: 3,
  },
  {
    userId: 4,
  },
  {
    userId: 5,
  },
  {
    userId: 6,
  },
];

const seedOrderItems = [
  //Orders for Customer 1
  {
    productId: 1,
    orderId: 1,
    userId: 1
  },
  {
    productId: 7,
    orderId: 1,
    userId: 1
  },
  {
    productId: 9,
    orderId: 1,
    userId: 1
  },
  //Orders for Customer 2
  {
    productId: 5,
    orderId: 2,
    userId: 2
  },
  {
    productId: 11,
    orderId: 2,
    userId: 2
  },
  //Orders for Customer 4
  {
    productId: 2,
    orderId: 4,
    userId: 4
  },
  {
    productId: 17,
    orderId: 4,
    userId: 4
  },
  {
    productId: 19,
    orderId: 4,
    userId: 4
  },
  {
    productId: 12,
    orderId: 4,
    userId: 4
  },
  //Orders for Customer 5
  {
    productId: 10,
    orderId: 5,
    userId: 5
  },
  {
    productId: 13,
    orderId: 5,
    userId: 5
  },
  //Order for Customer 6
  {
    productId: 8,
    orderId: 6,
    userId: 6
  },
]

const seedModifiedOrderStatuses = [
  {
    orderId: 2,
    "orderStatusId": 2
  },
  {
    orderId: 1,
    "orderStatusId": 3
  },
  {
    orderId: 4,
    "orderStatusId": 2
  },

]

module.exports = { seedOrderStatus, seedInitalOrders, seedOrderItems, seedModifiedOrderStatuses }
