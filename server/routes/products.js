const express = require('express');
const productRouter = express.Router();
const { saveProduct, loadProducts, loadSingleProduct } = require('../controllers/productController');

productRouter.get('/', async (req, res) => {
  try {
    res.status(200).send(await loadProducts());
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

productRouter.get('/:slug',  async (req, res) => {
  try {
    res.send(await loadSingleProduct(req.params.slug));
  } catch (err) {
    console.error(err.message);
    res.status(400).send('Could not load product');
  }
})

module.exports = productRouter;