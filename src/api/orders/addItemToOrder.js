import axios from "axios";
export  function addItemToOrder(item)
{
    const {
        productId,
          quantity,
          unitPrice,
          orderId,
          inventoryId
}=item;
    try {
console.log(item);
        const orders = axios.post(`/api/orders/${orderId}/orderItems`,{
            productId,
            quantity,
            unitPrice,
            orderId,
            inventoryId
        })
        return orders
        
    } catch (error) {
        throw error
        
    }
}