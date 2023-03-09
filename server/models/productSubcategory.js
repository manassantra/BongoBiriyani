const mongoose = require('mongoose');

const prdSubcatSchema = mongoose.Schema({
  productSubcatId: {type: String},
  subCategoryName: {type: String},
  descriptions: {type: String},
  imgUrl: {type: String},
  isActive: {type: Boolean}
})


module.exports = mongoose.model('ProductSubategory', prdSubcatSchema);