const {loadAllProducts, loadProductById, saveNewProduct} = require('../models/products');

const saveProduct = async(product) => {
  await saveNewProduct(product);
  return loadAllProducts();
}

module.exports = { saveProduct };