const mongoose = require('mongoose');

const prdCatSchema = new mongoose.Schema({
  productCatId: {type: String},
  categoryName: {type: String, required : true},
  descriptions: {typr: String},
  imgUrl: {typr: String},
  isActive: {type: Boolean}
})


module.exports = mongoose.model('ProductCategory', prdCatSchema);