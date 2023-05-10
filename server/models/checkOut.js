import { Collection, Schema, model } from 'mongoose';

const checkOutSchema = new Schema({
  customerName: { type: String, required: true },
  customerEmail: { type: String, required: true },
  customer: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
  }
  cart: {
    products: [],
    total: { type: Number, required: true },
  }
  paymentMethod: { type: String, required: true },
},
{collection: 'checkOut'}
)

const CheckOutModel = model('CheckOut', checkOutSchema);

const loadOrder = async () => {
  return await CheckOutModel.find();
}

const saveOrder = async (order) => { 
  const newOrder = new CheckOutModel(order);
  return await newOrder.save();
}

module.exports = { loadOrder, saveOrder };