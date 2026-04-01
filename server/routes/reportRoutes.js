const express = require('express');
const router = express.Router();
const {
    getDashboardStats,
    getWeeklyActivity
} = require('../controllers/reportController');
const { protect } = require('../middleware/authMiddleware');

router.get('/dashboard', protect, getDashboardStats);
router.get('/weekly', protect, getWeeklyActivity);

module.exports = router;
