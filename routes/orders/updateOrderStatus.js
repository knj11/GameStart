const { updateOrderStatusDb } = require("../../db");

updateOrderStatusDb;

const updateOrderStatus = async (req, res, next) => {
  const { orderId } = req.body;
  try {
    const updatedOrder = await updateOrderStatusDb(orderId);

    res.send(updatedOrder);
  } catch (error) {
    next(error);
  }
};

module.exports = { updateOrderStatus };
