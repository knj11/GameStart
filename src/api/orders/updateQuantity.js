
import axios from 'axios'

export function updateQuantity(itemOrderId){

    try {

       const updatedItem = axios.patch(`api/orders/orderItems/${itemOrderId}`)

       return updatedItem
        
    } catch (error) {

        throw error
        
    }

}