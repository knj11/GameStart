const { Router } = require("express");
const ordersRouter = Router();
const createCart = require("./createCart");
const addToCart = require("./addToCart");
const updateQuantity = require("./updateQuantity");

ordersRouter.use((req, res, next) => {
  console.log("A request is being made to /orders");

  next();
});

ordersRouter.get("/", createCart);
ordersRouter.post("/:orderId/orderItems", addToCart);
ordersRouter.patch("/orders/orderItems/:orderItemId", updateQuantity);

module.exports = ordersRouter;
