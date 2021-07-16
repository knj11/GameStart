const express = require("express");
const productsRouter = express.Router();
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  productsToArrayedObjWithInventory,
} = require("../db");

productsRouter.use((req, res, next) => {
  console.log("A request is being made to /products");

  next();
});

productsRouter.get("/", async (req, res) => {
  const products = await getAllProducts();
  res.send(products);
});

//1. add POST route for adding a new product

productsRouter.post("/", async (req, res, next) => {
  try {
    //ensure that the user has admin rights
    if (req.user.roleId !== 1) throw "user is not an administrator";
    const { title, description, unitPrice } = req.body;

    const createNewProduct = await createProduct({
      title,
      description,
      unitPrice,
    });

    res.send(createNewProduct);
  } catch (error) {
    next(error);
  }
});

//2. add PUT route for editing a new product

productsRouter.put("/", async (req, res, next) => {
  try {
    //ensure that the user has admin rights
    if (req.user.roleId !== 1) throw "user is not an administrator";
    const { id } = req.query;
    const { title, description, unitPrice } = req.body;

    const updatedProduct = await updateProduct(id, {
      title,
      description,
      unitPrice,
    });

    res.send(updatedProduct);
  } catch (error) {
    next(error);
  }
});

//3. add DELETE route for deleting a product

productsRouter.delete("/", async (req, res, next) => {
  try {
    //ensure that the user has admin rights
    if (req.user.roleId !== 1) throw "user is not an administrator";
    const { id } = req.query;
    console.log("This is the delete id", id);

    //const getProduct = await getProductById(id);
    //if (getProduct) {
    const deletedProduct = await deleteProduct(id);
    if (!deletedProduct) throw "Product was NOT deleted";
    res.send(deletedProduct);
    //}
  } catch (error) {
    next(error);
  }
});

module.exports = productsRouter;
