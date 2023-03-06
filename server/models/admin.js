const mongoose = require('mongoose');

const AdminSchema = mongoose.Schema({
  admId: {type: String},
  fullName: {type: String, required : true},
  email: {type: String, required : true},
  dob: {type: Date},
  mob: {type: Number, required : true},
  accessType: {type: String},
  gender: {type: String},
  govUid: {type: String},
  password: {type: String},
  isVerified: {type: Boolean}
})


module.exports = mongoose.model('Admins', AdminSchema)