const { loadOrderFromDB, saveOrderInDB } = require('../models/checkOut');
const { loadOneCart, deleteCart } = require('../models/cart');

const loadOrder = async () => {
  const orderArray = await loadOrderfromDB();
  return orderArray[0];
}

const saveOrder = async (order) => {
  try {
    const cartArray = await loadOneCart();
    const cart = cartArray[0];
    if (!cart) {
      throw new Error('No cart to checkout');
    }
    if (!order) {
      throw new Error('Order not found');
    }
    order.cart = cart;
    await saveOrderInDB(order);
  }
  catch (err) {
    console.error(err.message);
  } finally {
    await deleteCart();
  }
}

module.exports = { loadOrder, saveOrder };