import axios from 'axios'

const PRODUCT_URL = 'api/products'

export async function editProduct(id, token, { title, description, unitPrice }) {
  try {
    const { data: editedProduct } = await axios.put(PRODUCT_URL + `?id=${id}`, { title, description, unitPrice }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return editedProduct
  } catch (error) {
    console.dir(error)
    return null
  }
}