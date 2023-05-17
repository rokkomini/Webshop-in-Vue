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
  timestamp: { type: Date, default: Date.now },
},
{collection: 'orders'}
)

const CheckOutModel = model('CheckOut', checkOutSchema);

const loadOrderFromDB = async (customerEmail) => {
  const latestOrder = await CheckOutModel.find({ 'customer.email': customerEmail}).sort({ field: 'asc', _id: -1 }).limit(1).exec();
  return latestOrder;
}

const saveOrderInDB = async (order) => { 
  const newOrder = new CheckOutModel(order);
  return await newOrder.save();
}

module.exports = { loadOrderFromDB, saveOrderInDB };