const TimeEntry = require('../models/TimeEntry');

exports.getTimeEntries = async (req, res) => {
    try {
        const entries = await TimeEntry.find().populate({
            path: 'project',
            populate: { path: 'client' }
        }).sort({ date: -1 }); // Newest first
        res.json(entries);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.addTimeEntry = async (req, res) => {
    const entry = new TimeEntry({
        project: req.body.project,
        description: req.body.description,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        duration: req.body.duration,
        date: req.body.date
    });

    try {
        const newEntry = await entry.save();
        res.status(201).json(newEntry);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.updateTimeEntry = async (req, res) => {
    try {
        const entry = await TimeEntry.findById(req.params.id);
        if (!entry) return res.status(404).json({ message: 'Time Entry not found' });

        // Update fields if present
        if (req.body.project) entry.project = req.body.project;
        if (req.body.description) entry.description = req.body.description;
        if (req.body.startTime) entry.startTime = req.body.startTime;
        if (req.body.endTime) entry.endTime = req.body.endTime;
        if (req.body.duration) entry.duration = req.body.duration;
        if (req.body.date) entry.date = req.body.date;

        const updatedEntry = await entry.save();
        res.json(updatedEntry);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.deleteTimeEntry = async (req, res) => {
    try {
        const entry = await TimeEntry.findById(req.params.id);
        if (!entry) return res.status(404).json({ message: 'Time Entry not found' });

        await entry.deleteOne();
        res.json({ message: 'Time Entry deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
