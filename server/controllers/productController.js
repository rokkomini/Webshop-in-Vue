const { loadAllProducts, loadProductBySlug, saveNewProduct } = require('../models/products');

const saveProduct = async(product) => {
  await saveNewProduct(product);
  return loadAllProducts();
}

const loadProducts = async() => {
  return await loadAllProducts();
}

const loadSingleProduct = async(slug) => {
  const product = await loadProductBySlug(slug);
  if (!product) {
    throw new Error('Product not found');
  }
  return product;
}

module.exports = { saveProduct, loadProducts, loadSingleProduct };