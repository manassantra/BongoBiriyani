const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  uId: {type: String},
  fullName: {type: String, required : true},
  email: {type: String},
  mob: {type: Number, required : true},
  gender: {type: String},
  dob: {type:Date},
  password: {type: String, required : true},
  isVerified: {type: Boolean}
})


module.exports = mongoose.model('Users', userSchema);