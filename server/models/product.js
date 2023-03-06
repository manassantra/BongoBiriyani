const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  pId: {type: String},
  productName: {type: String, required : true},
  productCatId: {typr: String, required : true},
  productSubcatId: {typr: String, required : true},
  descriptions: {typr: String},
  imgUrl: {typr: String},
  price: {typr: String, required : true},
  inStock: {typr: String},
  isActive: {type: Boolean}
})


module.exports = mongoose.model('Products', productSchema);