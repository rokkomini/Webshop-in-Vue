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

const saveNewCart = async (cart) => { 
  const newCart = new CartModel(cart);
  return await newCart.save();
}

const deleteCart = async (cart) => { 
  return await CartModel.deleteOne(cart).exec();
}

module.exports = { loadOneCart, saveNewCart, deleteCart }; 