

import axios from "axios";

export async function removeItemFromOrder({inventoryId,orderItemId}){
    try {
        const result=await axios.delete(`/api/orders/orderItems/${orderItemId}`,{data:{inventoryId}})
        return result
    } catch (error) {
        console.log(error)
        return error
    }
}

