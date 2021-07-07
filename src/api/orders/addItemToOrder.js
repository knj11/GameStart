import axios from "axios";
export async function addItemToOrder(item)
{
    const {
        productId,
          quantity,
          unitPrice,
          orderId,
          inventoryId
}=item;
    try {
       
        const {data} = await axios.post(`/api/orders/${orderId}/orderItems`,{
            productId,
            quantity,
            unitPrice,
            orderId,
            inventoryId
        })
      
        return data
        
    } catch (error) {
        console.log('addItemToOrder...',error)
        throw error

        
    }
}