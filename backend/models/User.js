const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  balance: { type: Number, default: 100 },
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
