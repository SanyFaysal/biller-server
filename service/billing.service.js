const mongoose = require('mongoose');
const Billing = require('../models/Billing');
const User = require('../models/User');

exports.createBillingService = async (data) => {
  const result = await Billing.create(data);
  return result;
};
// exports.getBillingService = async (id) => {
//   const result = await Job.find({ _id: id });
//   // .populate('postedBy.id')
//   // .populate('applicants');
//   return result;
// };
exports.getBillingListService = async (queries) => {
  let filter;
  if (queries.filter) {
    filter = {
      $or: [
        { firstName: queries.filter },
        { lastName: queries.filter },
        { phoneNumber: queries.filter },
        { email: queries.filter },
      ],
    };
  }
  if (!queries.filter) {
    filter = {};
  }

  const billingList = await Billing.find({})
    .skip(queries.skip)
    .limit(queries.limit);

  const total = await Billing.countDocuments(billingList);
  const page = Math.ceil(total / queries.limit);

  const totalBillingAmount = await Billing.aggregate([
    { $match: {} },
    {
      $project: {
        total: { $sum: '$billingAmount' },
      },
    },
  ]);
  let totalBill = 1;

  for (let index = 0; index < totalBillingAmount.length; index++) {
    totalBill = totalBill + totalBillingAmount[index].total;
  }

  return { total, page, billingList, totalBill };
};
exports.updateBillingService = async (id, data) => {
  const result = await Billing.updateOne({ _id: id }, { $set: data });
  console.log(result);
  return result;
};
exports.deleteBillingService = async (id) => {
  const result = await Billing.deleteOne({ _id: id });
  return result;
};
