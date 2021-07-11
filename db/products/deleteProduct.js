const { client } = require("../client");

async function deleteProduct(id) {
  try {
    //Remove product dependencies
    await client.query(`DELETE FROM "ordersItem" WHERE "productId"=$1;`, [id])
    await client.query(`DELETE FROM "reviews" WHERE "productId"=$1;`, [id])
    await client.query(`DELETE FROM "productCategory" WHERE "productId"=$1;`, [id])

    //Remove inventory dependencies
    const {rows: inventoryIds} = await client.query(`SELECT id FROM "inventory" WHERE "productId"=$1;`, [id])
    for (const i of inventoryIds) {
      await client.query(`DELETE FROM "ordersItem" WHERE "inventoryId"=$1;`, [i.id])
    } 
    await client.query(`DELETE FROM "inventory" WHERE "productId"=$1;`, [id])

    //Remove from Main product table
    const {
      rows: [deletedProduct],
    } =
      await client.query(
        /*sql*/ `
          DELETE FROM products WHERE id=$1
          RETURNING *;
          `,
        [id]
      );
    return deletedProduct;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = { deleteProduct };



