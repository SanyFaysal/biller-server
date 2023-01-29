const express = require('express');
// const jobController = require('../controller/job.controller');
// const { authorization } = require('../middleware/authorization');
// const { checkApplyExpire } = require('../middleware/checkApplyExpire');
// const { verifyToken } = require('../middleware/verifyToken');
const router = express.Router();

router.route('/billing-list').get(jobController.getJobs);

router.route('/add-billing').post(jobController.getJobs);

// router
//   .route('/jobs/:id/apply')
//   .post(
//     verifyToken,
//     authorization('candidate'),
//     checkApplyExpire,
//     jobController.applyJob
//   );

// router
//   .route('/manager/jobs')
//   .get(
//     verifyToken,
//     authorization('hiring-manager'),
//     jobController.getManagerJob
//   );
// router
//   .route('/manager/jobs/:id')
//   .get(
//     verifyToken,
//     authorization('hiring-manager'),
//     jobController.getManagerJobById
//   );

// router
//   .route('/jobs/:id')
//   .get(verifyToken, authorization('candidate'), jobController.getJobById)
//   .patch(verifyToken, authorization('hiring-manager'), jobController.updateJob);

module.exports = router;
