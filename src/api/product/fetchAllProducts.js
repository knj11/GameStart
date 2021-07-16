import axios from "axios";

const PRODUCT_URL = "api/products";

export async function fetchAllProducts() {
  try {
    const { data: allProducts } = await axios.get(PRODUCT_URL);

    console.log(allProducts);
    return allProducts;
  } catch (error) {
    console.log("Trouble fetching All Products");
    console.dir(error);
    // test returning the Error message from an axios request
  }
}
