const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const productRouter = require('./routes/products');
const { setupMongoDb } = require('./models/common');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/webshop';

//Routes
app.use('/product', productRouter);

app.listen(PORT, async (req, res) => {
  try {
    setupMongoDb(MONGO_URL);
    console.log(`App listening on port ${PORT}!`);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Failed connecting to MongoDB');
  }
});