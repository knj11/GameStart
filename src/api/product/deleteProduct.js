import axios from 'axios'

const PRODUCT_URL = 'api/products'

export async function deleteProduct(id, token) {
  try {
    const {data: deletedProduct} = await axios.delete(PRODUCT_URL + `?id=${id}`, {headers: {
      Authorization: `Bearer ${token}`
    }})
    console.log("deletedProduct", deletedProduct)
    return deletedProduct.id
  } catch (error) {
    console.dir(error)
    return null
  }
}