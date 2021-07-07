const { client } = require("../client");

//update title, description, picture or unit price,
//depending on what is passed in
async function updateProduct({ id, title, description, picture, unitPrice }) {
    try {
      const {
        rows: [updatedProduct],
      } = title
        ? await client.query(
            /*sql*/ `UPDATE products SET title=$1 WHERE id=$2 RETURNING *`,
            [title, id]
          )
        : description
        ? await client.query(
            /*sql*/ `UPDATE products SET description=$1 WHERE id=$2 RETURNING *`,
            [description, id]
          )
        : picture
        ? await client.query(
            /*sql*/ `UPDATE products SET picture=$1 WHERE id=$2 RETURNING *`,
            [picture, id]
          )
        : unitPrice
        ? await client.query(
            /*sql*/ `UPDATE products SET "unitPrice"=$1 WHERE id=$2 RETURNING *`,
            [unitPrice, id]
            )
        : null;
      return updatedProduct;
    } catch (error) {
      throw error;
    }
  }

module.exports = { updateProduct };