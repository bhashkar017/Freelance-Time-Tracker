const TimeEntry = require('../models/TimeEntry');
const Project = require('../models/Project'); // Needed for calculations if verification is needed
const asyncHandler = require('../utils/asyncHandler');

// @desc    Get all time entries for logged in user
// @route   GET /api/time-entries
// @access  Private
exports.getTimeEntries = asyncHandler(async (req, res) => {
    const entries = await TimeEntry.find({ user: req.user.id })
        .populate({
            path: 'project',
            populate: { path: 'client', select: 'name' }
        })
        .sort({ startTime: -1, date: -1 })
        .lean();
    res.json(entries);
});

// @desc    Add a manual time entry
// @route   POST /api/time-entries
// @access  Private
exports.addTimeEntry = asyncHandler(async (req, res) => {
    const { project, description, startTime, endTime, duration, date } = req.body;

    const entry = new TimeEntry({
        user: req.user.id,
        project,
        description,
        startTime,
        endTime,
        duration,
        date: date || Date.now()
    });

    const createdEntry = await entry.save();
    res.status(201).json(createdEntry);
});

// @desc    Start a timer (Create entry with start time)
// @route   POST /api/time-entries/start
// @access  Private
exports.startTimeEntry = asyncHandler(async (req, res) => {
    const { project, description } = req.body;

    const activeEntry = await TimeEntry.findOne({
        user: req.user.id,
        endTime: null
    }).lean();

    if (activeEntry) {
        res.status(400);
        throw new Error('You already have a running timer. Stop it first.');
    }

    const entry = new TimeEntry({
        user: req.user.id,
        project,
        description,
        startTime: Date.now(),
        date: Date.now()
    });

    const createdEntry = await entry.save();
    res.status(201).json(createdEntry);
});

// @desc    Stop a timer
// @route   PUT /api/time-entries/stop/:id
// @access  Private
exports.stopTimeEntry = asyncHandler(async (req, res) => {
    const entry = await TimeEntry.findById(req.params.id);

    if (!entry) {
        res.status(404);
        throw new Error('Time Entry not found');
    }

    if (entry.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error('User not authorized');
    }

    if (entry.endTime) {
        res.status(400);
        throw new Error('Timer already stopped');
    }

    entry.endTime = Date.now();
    // Calculate duration in hours
    const diff = new Date(entry.endTime) - new Date(entry.startTime);
    entry.duration = diff / 1000 / 3600;

    const updatedEntry = await entry.save();
    res.json(updatedEntry);
});

// @desc    Update time entry
// @route   PUT /api/time-entries/:id
// @access  Private
exports.updateTimeEntry = asyncHandler(async (req, res) => {
    const entry = await TimeEntry.findById(req.params.id);

    if (!entry) {
        res.status(404);
        throw new Error('Time Entry not found');
    }

    if (entry.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error('User not authorized');
    }

    entry.project = req.body.project || entry.project;
    entry.description = req.body.description || entry.description;
    entry.startTime = req.body.startTime || entry.startTime;
    entry.endTime = req.body.endTime || entry.endTime;
    entry.duration = req.body.duration || entry.duration;
    entry.date = req.body.date || entry.date;

    const updatedEntry = await entry.save();
    res.json(updatedEntry);
});

// @desc    Delete time entry
// @route   DELETE /api/time-entries/:id
// @access  Private
exports.deleteTimeEntry = asyncHandler(async (req, res) => {
    const entry = await TimeEntry.findById(req.params.id);

    if (!entry) {
        res.status(404);
        throw new Error('Time Entry not found');
    }

    if (entry.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error('User not authorized');
    }

    await entry.deleteOne();
    res.json({ message: 'Time Entry deleted' });
});
