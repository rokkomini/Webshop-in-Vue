
const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    name: { type: String, required: true, unique: true },
    description: String,
    attributes: {
      size: [String],
      color: [String],
    }
    category: [String],
    brand: String,
    price: Number,
    mainImage: { url: String, alt: String },
    moreImages: [{ url: String, alt: String }],
},
{collection: 'products'}
);  

const ProductModel = model('Product', productSchema);

const loadAllProducts = async () => {
  return await ProductModel.find({}).exec();
}

const loadProductById = async (id) => {
  return await ProductModel.findById(id).exec();
}

const saveNewProduct = async (product) => { 
  const newProduct = new ProductModel(product);
  return await newProduct.save();
}

export { loadAllProducts, loadProductById, saveNewProduct};
