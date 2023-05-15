const { loadAllProducts, loadProductBySlug, saveNewProduct, searchProducts } = require('../models/products');

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

const getSearchResults = async(query) => {
  const searchResults = await searchProducts(query);
  if (searchResults.length < 1) {
    throw new Error('No matching products found');
  }
  console.log('searchResults in controller: ', searchResults.length)
  return searchResults;
}

module.exports = { saveProduct, loadProducts, loadSingleProduct, getSearchResults };