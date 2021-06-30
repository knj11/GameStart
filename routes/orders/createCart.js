const { getOrderBySessionId } = require("../../db");

async function createCart(req, res, next) {
  try {
    console.log(req.body);
    const sessionId = req.body.sessionId;
    console.log(sessionId);
    const user = req.user;
    const order = await getOrderBySessionId(sessionId);

    res.send(order);
  } catch (error) {
    throw error;
  }
}

module.exports = createCart;

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
