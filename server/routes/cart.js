const express = require('express');
const cartRouter = express.Router();

const { loadCart, saveCart, addInCart, removeInCart, deleteCart, deleteCartItem } = require('../controllers/cartController');

cartRouter.get('/get-cart', async (req, res) => {
  try {
    res.status(200).send(await loadCart());
  } catch (err) {
    console.error(err.message);
    res.status(400).send('No cart found');
  }
})

cartRouter.post('/add-to-cart', async (req, res) => {
  console.log('req.body', req.body)
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

cartRouter.patch('/add-quantity', async (req, res) => { 
  const itemId = req.body.cartItem
  try {
    res.status(200).send(await addInCart(itemId));
  } catch (err) {
    console.error(err.message);
    res.status(400).send('Could not add in cart');
  }
})

cartRouter.patch('/remove-quantity', async (req, res) => { 
  const itemId = req.body.cartItem
  try {
    res.status(200).send(await removeInCart(itemId));
  } catch (err) {
    console.error(err.message);
    res.status(400).send('Could not add in cart');
  }
})

cartRouter.delete('/delete-cart', async (req, res) => {
  try {
    res.status(200).send(await deleteCart());
  } catch (err) {
    console.error(err.message);
    res.status(400).send('Could not delete cart');
  }
})

cartRouter.delete('/delete-item', async (req, res) => {
  const itemId = req.body.cartItem
  try {
    res.status(200).send(await deleteCartItem(itemId));
  } catch (err) {
    console.error(err.message);
    res.status(400).send('Could not delete cart item');
  }
})


module.exports = cartRouter;