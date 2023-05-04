const {loadOneCart, saveNewCart, deleteCart} = require('../models/cart');
const { loadProductById } = require('../models/products');

const loadCart = async () => {
  return await loadOneCart();
}

const saveCart = async(productId, optionId) => {
  try {
    const cartArray = await loadOneCart();
    const cart = cartArray[0];
    const product = await loadProductById(productId)

    console.log('cart: ', cart)
    if (!product) {
      throw new Error('Product not found');
    }
    const price = product.price;

    var option = undefined;
    if (product.options.color.length > 0) {
      option = product.options.color.find((option) => option.id === optionId);
    } 

    if (product.options.size.length > 0) { 
      option = product.options.size.find((option) => option.id === optionId);
    }
    
    if (cart) {
      console.log('cart found')
      let productIndex = cart.products.findIndex((p) => p.productId === product.id && p.optionId === optionId);
      if (productIndex > -1) {
        console.log('product found in cart')
        cart.products[productIndex].quantity += 1;
        cart.products[productIndex].price += price;
        cart.total += price;
      } else {
        console.log('product not found in cart')
        cart.products.push({
          productId: productId,
          optionId: optionId,
          productName: product.name + ' - ' + option.name,
          image: {url: option.image.url, alt: option.image.alt},
          quantity: 1,
          price: price,
        });
        cart.total += price;
      }
      await saveNewCart(cart);
    } else {
      console.log('no cart found, new cart to be created')
      const newCart = {
        products: [{
          productId: productId,
          optionId: optionId,
          productName: product.name + ' - ' + option.name,
          image: {url: option.image.url, alt: option.image.alt},
          quantity: 1,
          price: product.price
        }],
        total: price,
      }
      await saveNewCart(newCart);
    }
  } catch (error) {
    throw new Error('Error saving cart');
  }
  return await loadOneCart();
}

module.exports = { loadCart, saveCart };