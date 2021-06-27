const express = require("express");
const productsRouter = express.Router();
const { getAllProducts } = require("../db");

productsRouter.use((req, res, next) => {
  console.log("A request is being made to /products");

  next();
});

productsRouter.get("/", async (req, res) => {
  const allProducts = await getAllProducts();
  res.send({ allProducts });
});

module.exports = productsRouter;
