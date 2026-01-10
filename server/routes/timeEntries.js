const express = require('express');
const router = express.Router();
const timeEntryController = require('../controllers/timeEntryController');

router.get('/', timeEntryController.getTimeEntries);
router.post('/', timeEntryController.addTimeEntry);
router.put('/:id', timeEntryController.updateTimeEntry);
router.delete('/:id', timeEntryController.deleteTimeEntry);

module.exports = router;
