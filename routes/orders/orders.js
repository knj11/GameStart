const { Router } = require("express");
const ordersRouter = Router();
const getCart = require("./getCart");
const addToCart = require("./addToCart");
const updateQuantity = require("./updateQuantity");
const createOrder = require("./createOrder");
const removeItemFromOrder = require("./removeItemFromOrder");

ordersRouter.use((req, res, next) => {
  console.log("A request is being made to /orders");
  next();
});

ordersRouter.get("/:sessionId", getCart);
ordersRouter.post("/", createOrder);
ordersRouter.post("/:orderId/orderItems", addToCart);
ordersRouter.delete("/orderItems/:orderItemId", removeItemFromOrder);
ordersRouter.patch("/orderItems/:orderItemId", updateQuantity);

module.exports = ordersRouter;
