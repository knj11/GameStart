const { deleteItem } = require("../../db")


async function removeItemFromOrder(req,res,next){

    try {
        
        const {orderItemId}=req.params
        const {inventoryId}=req.body
        const deletedItem= await deleteItem({orderItemId,inventoryId})
        res.send(deletedItem)

    } catch ({message,status}) {
        console.log({message,status})
        next({message,status})  
    }
}
module.exports=removeItemFromOrder;