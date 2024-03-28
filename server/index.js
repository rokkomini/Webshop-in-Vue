const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const productRouter = require('./routes/products');
const cartRouter = require('./routes/cart');
const checkoutRouter = require('./routes/checkout');
const { setupMongoDb } = require('./models/common');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || '3005'
const MONGODB_URL = process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/webshop";

console.log('port', PORT)
//Routes
app.use('/product', productRouter);
app.use('/cart', cartRouter);
app.use('/checkout', checkoutRouter);

app.listen(PORT, async (req, res) => {
  try {
    await setupMongoDb(MONGODB_URL);
    console.log(`App listening on port ${PORT}!`);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Failed connecting to MongoDB');
  }
});