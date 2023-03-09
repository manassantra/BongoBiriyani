const mongoose = require('mongoose');

const prdCatSchema = mongoose.Schema({
  productCatId: {type: String},
  categoryName: {type: String},
  descriptions: {type: String},
  imgUrl: {type: String},
  isActive: {type: Boolean}
})


module.exports = mongoose.model('ProductCategory', prdCatSchema);