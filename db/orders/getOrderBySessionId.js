const { client } = require("../client");
const { createCartStructure } = require("./createCartStructure");

async function getOrderBySessionId(sessionId, userId) {
  try {
    const { rows: order } = await client.query(
      /*sql*/ `
      SELECT a.id "orderId", a."userId", a."sessionId", b.id "itemId", b.quantity, b."unitPrice", c.id "productId", c.title, c.description, c.picture ,d.id "inventoryId",d.description "inventoryDescription"
      FROM orders a
      LEFT JOIN "ordersItem" b ON a.id = b."orderId"
      LEFT JOIN inventory d on d."id" =b."inventoryId"
      LEFT JOIN products c ON d."productId" = c.id
      WHERE (a."sessionId"=$1 or a."userId"=$2) and a."orderStatusId"=1;
      
    `,
      [sessionId, userId]
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
