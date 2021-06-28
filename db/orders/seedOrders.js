const seedOrderStatus = [
  {
    name: "In Progress",
    description: "Customer is fulling in Shopping Cart but has not placed order yet"
  },
  {
    name: "Order Placed",
    description: "Customer has placed an order for all items in thier shopping cart"
  },
  {
    name: "Deleted",
    description: "Shopping cart session was deleted by the customer"
  }
]

module.exports = { seedOrderStatus }