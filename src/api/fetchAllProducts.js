import axios from 'axios'

const URL = '/api'

export async function fetchAllProducts() {
  try {
    const {data: products} = await axios.get(URL + '/products')
    return products
  } catch (error) {
    console.log("Trouble fetching All Products")
    console.dir(error)
    // test returning the Error message from an axios request
  }
}