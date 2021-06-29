const { client } = require("../client");

async function deleteProduct(id) {
    try {
        const {
            rows: [deletedProduct],
          } =
      await client.query(
        /*sql*/ `
          DELETE FROM products WHERE id=$1;
          `,
        [id]
      );
      return deletedProduct;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

//module.exports = { deleteProduct };



