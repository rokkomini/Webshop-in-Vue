const express = require('express');
const checkoutRouter = express.Router();

const { loadOrder, saveOrder } = require('../controllers/checkoutController');

checkoutRouter.get('/get-order/:customerEmail', async (req, res) => {
  // console.log('req body get', req.body)
  console.log('req params get', req.params)
  try {
    res.status(200).send(await loadOrder(req.params.customerEmail));
  } catch (err) {
    console.error(err.message);
    res.status(400).send('No order found');
  }
})

checkoutRouter.post('/save-order', async (req, res) => {
  // console.log('req body', req.body)
  try {
    res.status(201).send(await saveOrder(req.body));
  } catch (err) {
    console.error(err.message);
    res.status(400).send('Could not save order');
  }
})

module.exports = checkoutRouter;