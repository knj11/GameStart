const { client } = require("../client");
const { createCartStructure } = require("./createCartStructure");

async function getOrderBySessionId(sessionId) {
  try {
    const { rows: order } = await client.query(
      /*sql*/ `
      SELECT a.id "orderId", a."userId", a."sessionId", b.id "itemId", b.quantity, b."unitPrice", c.id "productId", c.title, c.description, c.picture 
      FROM orders a
      JOIN "ordersItem" b ON a.id = b."orderId"
      JOIN products c ON b."productId" = c.id
      WHERE "sessionId"=$1;
      
    `,
      [sessionId]
    );
    return createCartStructure(order);
  } catch (error) {
    throw error;
  }
}

module.exports = { getOrderBySessionId };

/* 
{id, items:Item[]}
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
