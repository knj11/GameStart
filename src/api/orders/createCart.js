import axios from "axios";


export async function createCart ({productId,
    quantity,
    description,
    price,
    sessionId,
    orderDate}){

    try {
        const cart = await axios.post('api/orders',{
        productId,
          quantity,
          description,
          price,
          sessionId,
          orderDate
    })


    return cart
    } catch (error) {

        return(error)
        
    }
}

