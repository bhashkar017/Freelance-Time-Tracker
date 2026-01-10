const Client = require('../models/Client');

exports.getClients = async (req, res) => {
    try {
        const clients = await Client.find().sort({ createdAt: -1 });
        res.json(clients);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createClient = async (req, res) => {
    const client = new Client({
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        defaultRate: req.body.defaultRate
    });

    try {
        const newClient = await client.save();
        res.status(201).json(newClient);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.updateClient = async (req, res) => {
    try {
        const client = await Client.findById(req.params.id);
        if (!client) return res.status(404).json({ message: 'Client not found' });

        if (req.body.name) client.name = req.body.name;
        if (req.body.email) client.email = req.body.email;
        if (req.body.address) client.address = req.body.address;
        if (req.body.defaultRate) client.defaultRate = req.body.defaultRate;

        const updatedClient = await client.save();
        res.json(updatedClient);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.deleteClient = async (req, res) => {
    try {
        const client = await Client.findById(req.params.id);
        if (!client) return res.status(404).json({ message: 'Client not found' });

        await client.deleteOne();
        res.json({ message: 'Client deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
