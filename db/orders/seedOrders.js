const seedOrderStatus = [
  {
    name: "In Progress",
    description: "Customer is adding products to Shopping Cart but has not placed order yet",
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
    sessionId:'222222222222222222222222222222222222',
    totalAmount:999.99
  },
  {
    userId: 2,
    sessionId:'222222222222222222222222222222222223',
    totalAmount:1999.99
  },
  {
    userId: 3,
    sessionId:'222222222222222222222222222222222224',
    totalAmount:2999.99
  },
  {
    userId: 4,
    sessionId:'222222222222222222222222222222222225',
    totalAmount:3999.99
  },
  {
    userId: 5,
    sessionId:'222222222222222222222222222222222226',
    totalAmount:4999.99
  },
  {
    userId: 6,
    sessionId:'222222222222222222222222222222222227',
    totalAmount:5999.99
  },
];

const seedOrderItems = [
  //Orders for Customer 1
  {
    productId: 1,
    orderId: 1,
    quantity:2,
    unitPrice:99.99
    
  },
  {
    productId: 7,
    orderId: 1,
    quantity:3,
    unitPrice:199.99
  },
  {
    productId: 9,
    orderId: 1,
    quantity:5,
    unitPrice:49.99
  },
  //Orders for Customer 2
  {
    productId: 5,
    orderId: 2,
    quantity:5,
    unitPrice:89.99
  },
  {
    productId: 11,
    orderId: 2,
    quantity:4,
    unitPrice:129.99
  },
  //Orders for Customer 4
  {
    productId: 2,
    orderId: 4,
    quantity:2,
    unitPrice:299.99
  },
  {
    productId: 17,
    orderId: 4,
    quantity:5,
    unitPrice:79.99
  },
  {
    productId: 19,
    orderId: 4,
    quantity:2,
    unitPrice:99.99
  },
  {
    productId: 12,
    orderId: 4,
    quantity:3,
    unitPrice:39.99
  },
  //Orders for Customer 5
  {
    productId: 10,
    orderId: 5,
    quantity:6,
    unitPrice:399.99
  },
  {
    productId: 13,
    orderId: 5,
    quantity:1,
    unitPrice:699.99
  },
  //Order for Customer 6
  {
    productId: 8,
    orderId: 6,
    quantity:3,
    unitPrice:89.99
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
