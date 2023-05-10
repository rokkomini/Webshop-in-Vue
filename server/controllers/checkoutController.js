const { loadOrder, saveOrder } = require('../models/checkOut');
const { loadCart, deleteCart } = require('../models/cart');

const loadOrder = async () => {
  const orderArray = await loadOrder();
  return orderArray[0];
}

const saveOrder = async (order) => {
  try {
    const cartArray = await loadCart();
    const cart = cartArray[0];
    if (!cart) {
      throw new Error('No cart to checkout');
    }
    if (!order) {
      throw new Error('Order not found');
    }
    order.cart = cart;
    await saveOrder(order);
  }
  catch (err) {
    console.error(err.message);
  } finally {
    await deleteCart();
  }
  return loadOrder();
}