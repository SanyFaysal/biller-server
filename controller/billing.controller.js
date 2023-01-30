const {
  createBillingService,
  getBillingListService,
  updateBillingService,
  deleteBillingService,
} = require('../service/billing.service');

exports.createBilling = async (req, res) => {
  try {
    const data = req.body;
    data.createAt = Date.now();
    const result = await createBillingService(data);

    res.status(200).json({
      status: 'success',
      message: 'successfully get all the billing list',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      error: error.message,
    });
  }
};
exports.getBillingList = async (req, res) => {
  try {
    let queries = {};

    const { page = 1, limit = 10, filter } = req.query;
    queries.filter = filter;
    const skip = (page - 1) * parseInt(limit);
    queries.skip = skip;
    queries.limit = parseInt(limit);
    console.log(queries);
    const result = await getBillingListService(queries);

    res.status(200).json({
      status: 'success',
      message: 'successfully get all the billing list',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      error: error.message,
    });
  }
};
exports.updateBilling = async (req, res) => {
  try {
    const data = req.body;
    const id = req.params.id;

    const result = await updateBillingService(id, data);

    res.status(200).json({
      status: 'success',
      message: 'successfully get all the billing list',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      error: error.message,
    });
  }
};
exports.deleteBilling = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await deleteBillingService(id);

    res.status(200).json({
      status: 'success',
      message: 'successfully get all the billing list',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      error: error.message,
    });
  }
};
