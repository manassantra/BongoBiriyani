const mongoose = require('mongoose');

const AdminSchema = mongoose.Schema({
  _id: Schema.Types.ObjectId,
  uId: {type: String},
  fullName: {type: String, required : true},
  email: {type: String, required : true},
  dob: {type: Date, required : true},
  govUid: {type: String},
  passwordHash: {type: String, required : true},
  passwordSalt: {type: String, required : true},
  isVerified: {type: Boolean}
})


module.exports = mongoose.model('Users', AdminSchema)