const seedOrderStatus = [
  {
    name: "In Progress",
    description:
      "Customer is adding products to Shopping Cart but has not placed order yet",
  },
  {
    name: "Order Placed",
    description: "Customer has placed an order for all items in their shopping cart",
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

module.exports = { seedOrderStatus, seedInitalOrders };
