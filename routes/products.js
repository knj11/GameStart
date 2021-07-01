const express = require("express");
const productsRouter = express.Router();
const { 
  getAllProducts,
  createProduct,
  //updateProduct,
  //deleteProduct
} = require("../db");
const createProduct = require("../db/products/createProduct");
const deleteProduct = require("../db/products/deleteProduct");
const updateProduct = require("../db/products/updateProduct");

productsRouter.use((req, res, next) => {
  console.log("A request is being made to /products");

  next();
});

productsRouter.get("/", async (req, res) => {
  const allProducts = await getAllProducts();
  res.send({ allProducts });
});


//1. add POST route for adding a new product

productsRouter.post('/', async (req, res, next) => {
	try {
    //ensure that the user has admin rights
          //if (req.user.role !== 1) throw "user is not an administrator"
		const { title, description, picture, unitPrice = "" } = req.body;

		const createNewProduct = await createProduct({ title, description, picture, unitPrice });

		res.send(createNewProduct);
	} catch (error) {
		next(error);
	}
});

//2. add PUT route for editing a new product

productsRouter.put('/', async (req, res, next) => {
  try {
    //ensure that the user has admin rights
          //if (req.user.role !== 1) throw "user is not an administrator"
    const { activityId: id } = req.params;

    const { title, description, picture, unitPrice } = req.body;

    const updatedProduct = await updateProduct({ title, description, picture, unitPrice });

    res.send(updatedProduct);
  } catch (error) {
    next(error);
  }
});

//3. add DELETE route for deleting a product

productsRouter.delete('/', async (req, res, next) => {
	try {
    //ensure that the user has admin rights
          //if (req.user.role !== 1) throw "user is not an administrator"
		const { id } = req.params;
		
		const getProduct = await getProductById(id);
		if (getProduct) {
			const deletedProduct = await deleteProduct(id);
			res.send(deletedProduct);
		}
	} catch (error) {
		next(error);
	}
});

module.exports = productsRouter;
