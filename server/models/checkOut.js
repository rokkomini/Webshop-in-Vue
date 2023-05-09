import { Schema, model } from 'mongoose';

const checkOutSchema = new Schema({
  customerName: { type: String, required: true },
  customerEmail: { type: String, required: true },
  products: [],
  total: { type: Number }
})