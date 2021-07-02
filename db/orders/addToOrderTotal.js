async function addToOrderTotal(unitPrice, orderId) {
    try {
      const { rows: [orderTotal] } = await client.query(`
        UPDATE orders SET "totalAmount" = "totalAmount" + $1
        WHERE id=$2;
      `, [unitPrice, orderId])
      //return orderTotal
    } catch (error) {
      throw error
    }
  }
  module.exports = {addToOrderTotal}