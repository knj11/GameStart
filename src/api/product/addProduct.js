import axios from 'axios'

const PRODUCT_URL = 'api/products'

export async function addProduct(token, { title, unitPrice, description }) {
  try {
    const { data: newProduct } = await axios.post(PRODUCT_URL, { title, unitPrice, description }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return newProduct
  } catch (error) {
    console.dir(error)
    return null
  }
}