const express = require('express');
const productRouter = express.Router();
const { saveProduct, loadProducts, loadSingleProduct, getSearchResults } = require('../controllers/productController');

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
    res.status(200).send(await saveProduct(req.body));
  } catch (err) {
    console.error(err.message);
    res.status(400).send('Could not save product');
  }
})

productRouter.get('/:slug',  async (req, res) => {
  console.log('req params.slug: ', req.params.slug);
  try {
    res.status(200).send(await loadSingleProduct(req.params.slug));
  } catch (err) {
    console.error(err.message);
    res.status(400).send('Could not load product');
  }
})

productRouter.get('/search/:query', async (req, res) => {
  console.log('req params search: ', req.params.query)
  try {
    res.status(200).send(await getSearchResults(req.params.query));
  } catch (err) { 
    res.status(400).send('Could not find any matching products');
  }
})


module.exports = productRouter;