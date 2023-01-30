const mongoose = require('mongoose');
const validator = require('validator');
const { ObjectId } = mongoose.Schema.Types;

const billingSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'Please provide a name'],
      trim: true,
      lowercase: true,
      minLength: [3, 'Name is too small'],
    },
    lastName: {
      type: String,
      required: [true, 'Please provide a name'],
      trim: true,
      lowercase: true,
      minLength: [3, 'Name is too small'],
    },
    email: {
      type: String,
      required: [true, 'Please provide an email'],
      lowercase: true,
      validate: [validator.isEmail, 'Please provide a valid email'],
    },
    phoneNumber: {
      type: String,
      required: [true, 'Please provide a contact number'],
      validate: [
        validator.isMobilePhone,
        'Please provide a valid phone number',
      ],
    },

    billingAmount: {
      type: Number,
      required: [true, 'Please provide billing amount'],
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    timeStamps: true,
  }
);

const Billing = mongoose.model('Billing', billingSchema);

module.exports = Billing;
