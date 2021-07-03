const { deleteItem } = require("../../db")


async function removeItemFromOrder(req,res,next){

    try {
        
        const {orderItemId}=req.params
        console.log(orderItemId)
        const deletedItem= await deleteItem({orderItemId})
        return deletedItem

    } catch (error) {
        return error 
    }
}
module.exports=removeItemFromOrder;