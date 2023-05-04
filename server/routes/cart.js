const express = require('express');
const cartRouter = express.Router();

const { loadCart, saveCart } = require('../controllers/cartController');

cartRouter.get('/get-cart', async (req, res) => {
  try {
    res.status(200).send(await loadCart());
  } catch (err) {
    console.error(err.message);
    res.status(400).send('No cart found');
  }
})

cartRouter.post('/add-to-cart', async (req, res) => {
  const product = req.body;
  const productId = product.productId;
  const optionId = product.optionId;
  try {
    res.status(201).send(await saveCart(productId, optionId));
  } catch (err) {
    console.error(err.message);
    res.status(400).send('Could not save cart');
  }
})

module.exports = cartRouter;