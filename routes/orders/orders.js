const { Router } = require("express");

const { checkoutOrder } = require("./checkout");
const getCart = require("./getCart");
const addToCart = require("./addToCart");
const updateQuantity = require("./updateQuantity");
const createOrder = require("./createOrder");
const removeItemFromOrder = require("./removeItemFromOrder");
const { updateOrderStatus } = require("./updateOrderStatus");

const ordersRouter = Router();
ordersRouter.use((req, res, next) => {
  console.log("A request is being made to /orders");
  next();
});

ordersRouter.post("/pendingCart", getCart);
ordersRouter.post("/", createOrder);
ordersRouter.post("/:orderId/orderItems", addToCart);
ordersRouter.delete("/orderItems/:orderItemId", removeItemFromOrder);
ordersRouter.patch("/orderItems/:orderItemId", updateQuantity);
ordersRouter.post("/checkout", checkoutOrder);
ordersRouter.patch("/completeOrder", updateOrderStatus);

module.exports = ordersRouter;
