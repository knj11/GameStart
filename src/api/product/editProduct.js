import axios from 'axios'

const PRODUCT_URL = 'api/products'

export async function editProduct({ id, token, title, description, price }) {
  try {
    const { data: editedProduct } = await axios.put(PRODUCT_URL + `?id=${id}`, { title, description, price }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    console.log("editedProduct", editedProduct)
    return editedProduct.id
  } catch (error) {
    console.dir(error)
    return null
  }
}