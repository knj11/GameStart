const express = require("express");
const apiRouter = express.Router();
const authRouter = require("./auth/auth");
const attachUser = require("./auth/attachUser.js");
const productsRouter = require("./products");

apiRouter.use(attachUser);
apiRouter.use("/products", productsRouter);
apiRouter.use("/users", authRouter);

module.exports = apiRouter;
