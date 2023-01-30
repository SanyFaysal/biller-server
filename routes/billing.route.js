const express = require('express');
const billingController = require('../controller/billing.controller');

const router = express.Router();

router.route('/billing-list').get(billingController.getBillingList);
router.route('/add-billing').post(billingController.createBilling);
router.route('/update-billing/:id').patch(billingController.updateBilling);
router.route('/delete-billing/:id').delete(billingController.deleteBilling);

module.exports = router;
