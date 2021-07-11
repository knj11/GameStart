const { client } = require("../client");

//update title, description, picture or unit price,
//depending on what is passed in
async function updateProduct(id, fields) {
  try {
    // build the set string
    let finalIndex = Object.keys(fields).length + 1
    const paramArray = Object.values(fields)
    paramArray.push(id)
    
    const setString = Object.keys(fields).map(
      (key, index) => `"${key}"=$${index + 1}`
    ).join(', ');

    const { rows: [updatedProduct] } = await client.query(`
        UPDATE "products" SET ${setString} WHERE id=$${finalIndex}
        RETURNING *;
      `, paramArray)

    return updatedProduct;
  } catch (error) {
    throw error;
  }
}

module.exports = { updateProduct };