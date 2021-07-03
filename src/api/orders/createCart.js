import axios from "axios";


export async function createCart ({productId,
    quantity,
    description,
    price,
    sessionId,
    orderDate,
inventoryId}){

    try {
        const cart = await axios.post('api/orders',{
          productId,
          quantity,
          description,
          price,
          sessionId,
          orderDate,
          inventoryId
    })


    return cart
    } catch (error) {

        return(error)
        
    }
}

