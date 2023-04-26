
const { Schema, model, default: mongoose } = require('mongoose');
var slugify = require('slugify');

const productSchema = new Schema({
    name: { type: String, required: true, unique: true },
    description: String,
    options: {
      size: [String],
      color: [{name: String, colorCode: String, image: { url: String, alt: String }}],
    },
    category: [String],
    brand: String,
    price: Number,
    mainImage: { url: String, alt: String },
    moreImages: [{ url: String, alt: String }],
    slug: { type: String, unique: true },
},
{collection: 'products'}
);  

const ProductModel = model('Product', productSchema);

const loadAllProducts = async () => {
  return await ProductModel.find({}).exec();
}

const loadProductBySlug = async (slug) => {
  return await ProductModel.findOne({ slug: slug }).exec();
}

const saveNewProduct = async (product) => { 
  const newProduct = new ProductModel(product);
  const slug = slugify(product.name, {replacement: '-', lower: true});
  newProduct.slug = slug;
  return await newProduct.save();
}

module.exports = { loadAllProducts, loadProductBySlug, saveNewProduct };
