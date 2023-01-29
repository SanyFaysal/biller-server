const mongoose = require('mongoose');
const validator = require('validator');
const { ObjectId } = mongoose.Schema.Types;

const billingSchema = mongoose.Schema(
  {
    fullName: {
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
    phone: {
      type: String,
      required: [true, 'Please provide a contact number'],
      validate: [
        validator.isMobilePhone,
        'Please provide a valid phone number',
      ],
    },

    billAmount: {
      type: Number,
      required: [true, 'Please provide compensation'],
    },
  },
  {
    timeStamps: true,
  }
);

const Billing = mongoose.model('Billing', billingSchema);

module.exports = Billing;
