const express = require('express');
const {
  signup,
  findUserByEmail,
  getMe,
} = require('../controller/user.controller');
const { verifyToken } = require('../middleware/verifyToken');
const { route } = require('./billing.route');

const router = express.Router();

router.post('/registration', signup);
router.post('/login', findUserByEmail);
router.get('/me', verifyToken, getMe);

module.exports = router;
