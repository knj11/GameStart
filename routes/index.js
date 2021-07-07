const express = require("express");
const apiRouter = express.Router();
const authRouter = require("./auth/auth");
const productsRouter = require("./products");
const ordersRouter = require("./orders/orders");
const attachUser = require("./auth/attachUser.js");

apiRouter.use(attachUser);
apiRouter.use("/products", productsRouter);
apiRouter.use("/users", authRouter);
apiRouter.use("/orders", ordersRouter);

module.exports = apiRouter;
