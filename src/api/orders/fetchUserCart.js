import axios from "axios";

export async function fetchUserCart({ user, sessionId }) {
  return axios.post(
    `api/orders/pendingCart`,
    {
      sessionId,
    },
    {
      headers: {
        Authorization: `Bearer ${user?.token}`,
      },
    }
  );
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
