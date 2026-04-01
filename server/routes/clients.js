const express = require('express');
const router = express.Router();
const {
    getClients,
    createClient,
    updateClient,
    deleteClient
} = require('../controllers/clientController');
const { protect } = require('../middleware/authMiddleware');
const validate = require('../middleware/validate');
const { clientSchema } = require('../validations/schemas');

router.route('/')
    .get(protect, getClients)
    .post(protect, validate(clientSchema), createClient);

router.route('/:id')
    .put(protect, validate(clientSchema), updateClient)
    .delete(protect, deleteClient);

module.exports = router;
