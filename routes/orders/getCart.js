const { getOrderBySessionId } = require("../../db");

async function getCart(req, res, next) {
  try {
    const { sessionId } = req.body;
    const user = req.user;
    const order = await getOrderBySessionId(sessionId, user.id);
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
