
const { Schema, model, default: mongoose } = require('mongoose');
var slugify = require('slugify');

const productSchema = new Schema({
    name: { type: String, required: true, unique: true },
    description: String,
    options: {
      size: [String],
      color: [{ name: String, colorCode: String, image: { url: String, alt: String }}],
    },
    category: [String],
    brand: String,
    price: Number,
    mainImage: { url: String, alt: String },
    moreImages: [{ url: String, alt: String }],
    slug: { type: String, unique: true },
},
{ collection: 'products' }
);  

const ProductModel = model('Product', productSchema);

const loadAllProducts = async () => {
  return await ProductModel.find({}).exec();
}

const loadProductBySlug = async (slug) => {
  return await ProductModel.findOne({ slug: slug }).exec();
}

const loadProductById = async (id) => {
  return await ProductModel.findOne({ _id: id }).exec();
}

const saveNewProduct = async (product) => { 
  const newProduct = new ProductModel(product);
  const slug = slugify(product.name, {replacement: '-', lower: true});
  newProduct.slug = slug;
  return await newProduct.save();
}

const searchProducts = async (query) => {
  return await ProductModel.find({
    $or: [
      { name: RegExp(query, "i") },
      { category: { $elemMatch: { $eq: query }} },
      { brand: RegExp(query, "i") }
    ]
  }).exec()
}

module.exports = { loadAllProducts, loadProductBySlug, loadProductById, saveNewProduct, searchProducts };
