const {loadOneCart, saveNewCart, deleteCart, findCartItem} = require('../models/cart');
const { loadProductById } = require('../models/products');

const loadCart = async () => {
  const cartArray = await loadOneCart();
  return cartArray[0];
}

const saveCart = async(productId, optionId) => {
  try {
    const cartArray = await loadOneCart();
    const cart = cartArray[0];
    const product = await loadProductById(productId)

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
      let productIndex = cart.products.findIndex((p) => p.productId === product.id && p.optionId === optionId);
      if (productIndex > -1) {
        cart.products[productIndex].quantity += 1;
        cart.products[productIndex].price += price;
        cart.total += price;
      } else {
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

const addInCart = async (itemId) => { 
  try {
    const cart = await loadCart();   
    if (!cart) {
      throw new Error('Cartitem not found');
    }
    let itemIndex = cart.products.findIndex((p) => p.id == itemId);
    let cartItem = cart.products[itemIndex];
    const product = await loadProductById(cartItem.productId)
    cartItem.quantity += 1;
    cartItem.price += product.price;
    cart.total += product.price;
    await saveNewCart(cart);
  } catch (error) {
    throw new Error('Error adding in cart');
  } finally {
    return await loadOneCart();
  }
}

const removeInCart = async (itemId) => { 
  try {
    const cart = await loadCart();
    if (!cart) {
      throw new Error('Cartitem not found');
    }
    let itemIndex = cart.products.findIndex((p) => p.id == itemId);
    if (itemIndex > -1) {
      let cartItem = cart.products[itemIndex];
      const product = await loadProductById(cartItem.productId)
      if(cartItem.quantity > 1) { 
        cartItem.quantity --;
        cartItem.price -= product.price;
        cart.total -= product.price;
      } else {
        cart.total -= product.price;
        cart.products.splice(itemIndex, 1);
      }
    } 
    await saveNewCart(cart);
  } catch (error) { 
    throw new Error('Error removing in cart');
  } finally {
    return await loadOneCart();
  }
}

module.exports = { loadCart, saveCart, addInCart, removeInCart };