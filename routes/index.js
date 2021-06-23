const express = require("express");
const apiRouter = express.Router();

const productsRouter = require("./products");
apiRouter.use("/links", productsRouter);

module.exports = apiRouter;
