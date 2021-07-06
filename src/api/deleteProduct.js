import axios from 'axios'

const PRODUCT_URL = 'api/products'

export async function deleteProduct(id) {
  try {
    const { data: { deleteProduct } } = await axios.delete(PRODUCT_URL)
    console.log("deletedProduct", deleteProduct)
    return deleteProduct
  } catch (error) {
    console.dir(error)
  }
}