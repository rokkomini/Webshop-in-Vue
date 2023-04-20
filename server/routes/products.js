const express = require('express');
const productRouter = express.Router();

productRouter.get('/', async (req, res) => {
  try {
    res.send('Hello World!');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
})

productRouter.post('/', async (req, res) => {
  try {
    res.send('Hello World!');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
})

// router.get('/:productSlug', )

module.exports = productRouter;