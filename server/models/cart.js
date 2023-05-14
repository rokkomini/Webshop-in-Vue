const { Schema, model, default: mongoose } = require('mongoose');

const cartSchema = new Schema({
  products: [
    {
      productId: String,
      optionId: String,
      productName: String,
      image: { url: String, alt: String },
      quantity: {
        type: Number,
        required: true,
        min: [1, "Quantity must be at least 1"],
        default: 1,
      },
      price: Number,
}],
  total: {
    type: Number,
    required: true,
    default: 0,
  }
},
{collection: 'shoppingcart'}
)

const CartModel = model('Cart', cartSchema);

const loadOneCart = async () => { 
  return await CartModel.find();
}

const findCartItem = async (item) => {
  return await CartModel.find(item);
}

const saveNewCart = async (cart) => { 
  const newCart = new CartModel(cart);
  return await newCart.save();
}

const deleteAllInCart = async () => {
  console.log('delete all in cart model'); 
  return await CartModel.deleteOne().exec();
}

const deleteItemFromCart = async (item) => {
  console.log('delete item from cart model', item);
  return await CartModel.deleteOne(item).exec();
}

module.exports = { loadOneCart, saveNewCart, deleteAllInCart, findCartItem, deleteItemFromCart }; 