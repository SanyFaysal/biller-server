const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      minLength: [3, 'Name is too small'],
      maxLength: [100, 'Name is too long'],
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, 'Please provide a valid email'],
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timeStamps: true,
  }
);

userSchema.pre('save', function (next) {
  const password = this.password;
  const hash = bcrypt.hashSync(password);
  this.password = hash;
  next();
});

userSchema.methods.comparePassword = function (password, hash) {
  const isValidPassword = bcrypt.compareSync(password, hash);
  return isValidPassword;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
