const Client = require('../models/Client');
const asyncHandler = require('../utils/asyncHandler');

// @desc    Get all clients for logged in user
// @route   GET /api/clients
// @access  Private
exports.getClients = asyncHandler(async (req, res) => {
    const clients = await Client.find({ user: req.user.id })
        .sort({ createdAt: -1 })
        .lean();
    res.json(clients);
});

// @desc    Create a client
// @route   POST /api/clients
// @access  Private
exports.createClient = asyncHandler(async (req, res) => {
    const { name, email, address, defaultRate } = req.body;

    const client = new Client({
        user: req.user.id,
        name,
        email,
        address,
        defaultRate
    });

    const createdClient = await client.save();
    res.status(201).json(createdClient);
});

// @desc    Update client
// @route   PUT /api/clients/:id
// @access  Private
exports.updateClient = asyncHandler(async (req, res) => {
    const client = await Client.findById(req.params.id);

    if (!client) {
        res.status(404);
        throw new Error('Client not found');
    }

    if (client.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error('User not authorized');
    }

    client.name = req.body.name || client.name;
    client.email = req.body.email || client.email;
    client.address = req.body.address || client.address;
    client.defaultRate = req.body.defaultRate || client.defaultRate;

    const updatedClient = await client.save();
    res.json(updatedClient);
});

// @desc    Delete client
// @route   DELETE /api/clients/:id
// @access  Private
exports.deleteClient = asyncHandler(async (req, res) => {
    const client = await Client.findById(req.params.id);

    if (!client) {
        res.status(404);
        throw new Error('Client not found');
    }

    if (client.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error('User not authorized');
    }

    await client.deleteOne();
    res.json({ message: 'Client deleted' });
});
