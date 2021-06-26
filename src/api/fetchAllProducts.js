import axios from 'axios'

export async function fetchAllProducts() {
  try {
    const {data: products} = await axios.get('/products')
    console.log("products",products)
    return products
  } catch (error) {
    console.log("Trouble fetching All Products")
    console.dir(error)
    // test returning the Error message from an axios request
  }
}