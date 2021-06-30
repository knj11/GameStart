const { client } = require("../client");
async function getItemFromInventory(inventoryId) {
  try {
    const {rows:[inventoryItem]} = await client.query(
      /*sql*/
      `UPDATE inventory
      SET quantity=quantity-1
      WHERE id=$1 
      RETURNING * ;`,
      [inventoryId]
    );
    console.log(inventoryItem);
  } catch ({message,code,detail}) {
     if(code==23514){
       throw Error({message:`Out of stock for this inventory Item ${inventoryId}`,status:23514})
     }
     else throw Error({message,code})
  }
}

module.exports = { getItemFromInventory };


//23514 new row for relation "inventory" violates check constraint "inventory_quantity_check"
