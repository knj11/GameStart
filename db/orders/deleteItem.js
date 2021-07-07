const { response } = require("express");
const { client } = require("../client");
const  {addItemBackToInventory}=require('./addItemBackToInventory')
async function deleteItem({ orderItemId,inventoryId }) {
 
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

    if(!item){
      console.log(item)
       throw ({message:`Item with order id ${orderItemId} is not found!`,status:500})
       return
    }
    if(item.quantity==1){
     

      
      const deleteSql= /*sql*/`DELETE FROM "ordersItem"  WHERE id=$1;`
      // const {rows:[deletedItem]}= 
      const {rows}= await client.query(deleteSql,[orderItemId])
      

      await  addItemBackToInventory(inventoryId);

      return rows

    } else if( item.quantity>1){

      const updateSql=/*sql*/`UPDATE "ordersItem" set quantity=quantity-1 WHERE id=$1 RETURNING *;`

      const {rows:[updatedItem]} = await client.query(updateSql,[orderItemId])
     
      await  addItemBackToInventory(inventoryId);

      return updatedItem

    }


  } catch (error) {
    console.log(error);
    throw error;
  }
}

module.exports = { deleteItem };