const express = require('express');
const productRouter = express.Router();
const { saveProduct } = require('../controllers/productController');

productRouter.get('/', async (req, res) => {
  try {
    res.send('Helloooo');
  } catch (err) {
    console.error(err.message);
    res.status(400).send('No products found');
  }
})

productRouter.post('/', async (req, res) => {
  try {
    res.send(await saveProduct(req.body));
  } catch (err) {
    console.error(err.message);
    res.status(400).send('Could not save product');
  }
})

// router.get('/:productSlug', )

module.exports = productRouter;