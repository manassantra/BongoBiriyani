const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  _id: Schema.Types.ObjectId,
  uId: {type: String},
  fullName: {type: String, required : true},
  email: {type: String},
  mob: {type: Number, required : true},
  dob: {type: Date, required : true},
  passwordHash: {type: String, required : true},
  passwordSalt: {type: String, required : true},
  isVerified: {type: Boolean}
})


module.exports = mongoose.model('Users', UserSchema)