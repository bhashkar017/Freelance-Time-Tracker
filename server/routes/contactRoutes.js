const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Message = require('../models/Message');

// @desc    Send a message from the contact form
// @route   POST /api/contact
// @access  Public
router.post('/', async (req, res) => {
    try {
        const { firstName, lastName, email, message } = req.body;

        if (!firstName || !lastName || !email || !message) {
            return res.status(400).json({ message: 'Please fill out all fields' });
        }

        // Optional authentication check
        let userId = null;
        if (
            req.headers.authorization &&
            req.headers.authorization.startsWith('Bearer')
        ) {
            try {
                const token = req.headers.authorization.split(' ')[1];
                const decoded = jwt.verify(token, process.env.JWT_SECRET);
                userId = decoded.id;
            } catch (error) {
                console.warn('Optional Auth Failed:', error.message);
                // We don't block the request if token is invalid, just save as guest
            }
        }

        const newMessage = new Message({
            firstName,
            lastName,
            email,
            message,
            user: userId
        });

        const savedMessage = await newMessage.save();
        res.status(201).json({ 
            success: true, 
            message: 'Message sent successfully!',
            data: savedMessage 
        });
    } catch (error) {
        console.error('Contact Form Error:', error);
        res.status(500).json({ message: 'Server error, please try again later' });
    }
});

module.exports = router;
