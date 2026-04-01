const asyncHandler = require('../utils/asyncHandler');
const TimeEntry = require('../models/TimeEntry');
const Project = require('../models/Project');
const Client = require('../models/Client');

// @desc    Get dashboard statistics (Earnings, Hours, Counts)
// @route   GET /api/reports/dashboard
// @access  Private
exports.getDashboardStats = asyncHandler(async (req, res) => {
    const userId = req.user.id;

    // Counts
    const totalClients = await Client.countDocuments({ user: userId });
    const totalProjects = await Project.countDocuments({ user: userId });
    const activeProjects = await Project.countDocuments({ user: userId, status: 'Active' });

    // Financials & Time
    const timeEntries = await TimeEntry.find({ user: userId }).populate('project');

    let totalEarnings = 0;
    let totalSeconds = 0;

    timeEntries.forEach(entry => {
        if (entry.project && entry.duration) {
            const hours = entry.duration; // Stored as hours
            const rate = entry.project.hourlyRate || 0;
            totalEarnings += hours * rate;
            totalSeconds += entry.duration * 3600; // Convert to seconds for legacy naming or refactor variable
        }
    });

    res.json({
        clients: {
            total: totalClients
        },
        projects: {
            total: totalProjects,
            active: activeProjects
        },
        financials: {
            totalEarnings: parseFloat(totalEarnings.toFixed(2)),
            currency: 'USD' // Default for now
        },
        time: {
            totalHours: parseFloat((totalSeconds / 3600).toFixed(2))
        }
    });
});

// @desc    Get weekly activity (Last 7 days)
// @route   GET /api/reports/weekly
// @access  Private
exports.getWeeklyActivity = asyncHandler(async (req, res) => {
    const userId = req.user.id;
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const entries = await TimeEntry.find({
        user: userId,
        startTime: { $gte: sevenDaysAgo }
    }).sort({ startTime: 1 });

    // Group by day? Or just return entries for frontend to chart
    res.json(entries);
});
