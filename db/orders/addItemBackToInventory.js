const { client } = require("../client");

async function addItemBackToInventory(inventoryId){
    
    try {
        const {rows:[updatedInventory]}=await client.query(/*sql*/
                                                            ` UPDATE inventory
                                                              SET quantity = quantity + 1
                                                              WHERE id = $1  RETURNING *;`,[inventoryId]);

                                                              console.log(updatedInventory,'***')
        return updatedInventory;
    } catch (error) {
        
        throw error
        
    }
}

module.exports = {addItemBackToInventory}