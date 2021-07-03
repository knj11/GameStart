const { getOrderBySessionId } = require("../../db");

async function getCart(req, res, next) {
  try {
    const {sessionId} = req.params;
    console.log(sessionId)
    const user = req.user;
    const order = await getOrderBySessionId(sessionId);

    res.send(order);
  } catch (error) {
    throw error;
  }
}

module.exports = getCart;

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
