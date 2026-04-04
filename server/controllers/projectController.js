const Project = require('../models/Project');
const asyncHandler = require('../utils/asyncHandler');

// @desc    Get all projects for logged in user
// @route   GET /api/projects
// @access  Private
exports.getProjects = asyncHandler(async (req, res) => {
    const projects = await Project.find({ user: req.user.id })
        .populate('client', 'name email')
        .sort({ createdAt: -1 })
        .lean();
    res.json(projects);
});

// @desc    Create a project
// @route   POST /api/projects
// @access  Private
exports.createProject = asyncHandler(async (req, res) => {
    const { name, client, hourlyRate, currency, status } = req.body;

    const project = new Project({
        user: req.user.id,
        name,
        client,
        hourlyRate,
        currency,
        status
    });

    const createdProject = await project.save();
    res.status(201).json(createdProject);
});

// @desc    Update project
// @route   PUT /api/projects/:id
// @access  Private
exports.updateProject = asyncHandler(async (req, res) => {
    const project = await Project.findById(req.params.id);

    if (!project) {
        res.status(404);
        throw new Error('Project not found');
    }

    if (project.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error('User not authorized');
    }

    project.name = req.body.name || project.name;
    project.client = req.body.client || project.client;
    project.hourlyRate = req.body.hourlyRate || project.hourlyRate;
    project.currency = req.body.currency || project.currency;
    project.status = req.body.status || project.status;

    const updatedProject = await project.save();
    res.json(updatedProject);
});

// @desc    Delete project
// @route   DELETE /api/projects/:id
// @access  Private
exports.deleteProject = asyncHandler(async (req, res) => {
    const project = await Project.findById(req.params.id);

    if (!project) {
        res.status(404);
        throw new Error('Project not found');
    }

    if (project.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error('User not authorized');
    }

    await project.deleteOne();
    res.json({ message: 'Project deleted' });
});
