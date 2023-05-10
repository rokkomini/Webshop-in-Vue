const { Schema, model, default: mongoose } = require('mongoose');

const checkOutSchema = new Schema({
  customer: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    paymentMethod: { type: String, required: true },
  },
  cart: {
    products: [],
    total: { type: Number, required: true },
  },
},
{collection: 'checkOut'}
)

const CheckOutModel = model('CheckOut', checkOutSchema);

const loadOrderFromDB = async () => {
  return await CheckOutModel.find();
}

const saveOrderInDB = async (order) => { 
  const newOrder = new CheckOutModel(order);
  return await newOrder.save();
}

module.exports = { loadOrderFromDB, saveOrderInDB };