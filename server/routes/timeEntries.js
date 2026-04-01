const express = require('express');
const router = express.Router();
const {
    getTimeEntries,
    addTimeEntry,
    startTimeEntry,
    stopTimeEntry,
    updateTimeEntry,
    deleteTimeEntry
} = require('../controllers/timeEntryController');
const { protect } = require('../middleware/authMiddleware');
const validate = require('../middleware/validate');
const { timeEntrySchema } = require('../validations/schemas');

router.route('/')
    .get(protect, getTimeEntries)
    .post(protect, validate(timeEntrySchema), addTimeEntry);

router.post('/start', protect, startTimeEntry);
router.put('/stop/:id', protect, stopTimeEntry);

router.route('/:id')
    .put(protect, updateTimeEntry)
    .delete(protect, deleteTimeEntry);

module.exports = router;
