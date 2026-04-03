const express = require('express');
const router = express.Router();
const {
    registerUser,
    authUser,
    getUserProfile,
    googleAuth,
} = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');
const validate = require('../middleware/validate');
const { userSchema, loginSchema } = require('../validations/schemas');

router.post('/', validate(userSchema), registerUser);
router.post('/login', validate(loginSchema), authUser);
router.post('/google', googleAuth);
router.get('/profile', protect, getUserProfile);

module.exports = router;
