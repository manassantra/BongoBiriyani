const mongoose = require('mongoose');

const prdSubcatSchema = new mongoose.Schema({
  productSubcatId: {type: String},
  subCategoryName: {type: String, required : true},
  productCatId: {type: String},
  descriptions: {typr: String},
  imgUrl: {typr: String},
  isActive: {type: Boolean}
})


module.exports = mongoose.model('ProductSubategory', prdSubcatSchema);