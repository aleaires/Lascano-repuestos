const express = require('express');
const { login, checkAuth } = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');
const { getUserName } = require('../controllers/getUserNameController');

const router = express.Router();

router.post('/login', login);
router.get('/check-auth', authMiddleware, checkAuth);
router.get('/getUserName', authMiddleware, getUserName);

module.exports = router;
