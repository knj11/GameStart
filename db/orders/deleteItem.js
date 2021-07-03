const { client } = require("../client");

async function deleteItem({ orderItemId }) {
  try {
    const {
      rows: [item],
    } = await client.query(
      /*sql*/ `
        SELECT * FROM "ordersItem"
        WHERE id=$1;
      `,
      [orderItemId]
    );

    if(item.quantity==1){

      const deleteSql= /*sql*/`DELETE FROM "ordersItem"  WHERE id=$1`
      const {rows:[deletedItem]}= client.query(deleteSql,[orderItemId])
      return deletedItem

    } else{

      const updateSql=/*sql*/`UPDATE "ordersItem" set qunatity=quantity-1 WHERE id=$1`

      const {rows:[updatedItem]} = await client.query(updateSql,[orderItemId])

      return updatedItem

    }

  } catch (error) {
    throw error;
  }
}

module.exports = { deleteItem };