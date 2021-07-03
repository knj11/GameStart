import axios from "axios";

export async function fetchUserCart({ user, sessionId }) {
  //Promise.resolve([]);
  
  
  
  return axios.get(`api/orders/${sessionId}`)
}

/*
{
    sesssionId
    userId
    orderid
    items: Item[]
}


Item:{
itemId,
qunatity,
unitPrice,
productId
title,
description,
picture
}
*/
