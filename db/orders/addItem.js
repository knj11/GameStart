const { client } = require("../client");
const { getItemFromInventory } = require("./getItemFromInventory");

async function addItem({ productId, orderId, quantity,unitPrice,inventoryId }) {


  try { 
    const {rows:[item]}= await client.query(/*sql*/`SELECT * FROM "ordersItem" WHERE "orderId" =$1 and "inventoryId"=$2`,[orderId,inventoryId])

    if(!item  ){
    const {
      rows: [newItem],
    } = await client.query(
      /*sql*/ `
        INSERT INTO "ordersItem"( "productId", "orderId","quantity","unitPrice" ,"inventoryId")
        VALUES ($1, $2,$3,$4,$5)
        RETURNING *;
      `,
      [productId, orderId,quantity,unitPrice,inventoryId]
    );

    return newItem;
    }
    else {

      const updateSql=/*sql*/`UPDATE "ordersItem" set quantity=quantity+1 WHERE "orderId"=$1 and "inventoryId"=$2 RETURNING *;`

      const {rows:[updatedItem]} = await client.query(updateSql,[orderId,inventoryId])
     
      return updatedItem

    }
    
  } catch (error) {
    console.log("addItem...." , error)
    throw error;
  }
}

module.exports = { addItem };
