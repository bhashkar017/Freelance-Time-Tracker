const express = require('express');
const router = express.Router();
const {
    getProjects,
    createProject,
    updateProject,
    deleteProject
} = require('../controllers/projectController');
const { protect } = require('../middleware/authMiddleware');
const validate = require('../middleware/validate');
const { projectSchema } = require('../validations/schemas');

router.route('/')
    .get(protect, getProjects)
    .post(protect, validate(projectSchema), createProject);

router.route('/:id')
    .put(protect, validate(projectSchema), updateProject)
    .delete(protect, deleteProject);

module.exports = router;
