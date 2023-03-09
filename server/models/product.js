const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  pId: {type: String},
  productName: {type: String, required: true},
  productCat: {type: String, required: true},
  productSubcat: {type: String, required: true},
  descriptions: {type: String},
  imgUrl: {type: String},
  price: {type: Number, required: true},
  inStock: {type: Boolean},
  isActive: {type: Boolean}
})


module.exports = mongoose.model('Products', productSchema);