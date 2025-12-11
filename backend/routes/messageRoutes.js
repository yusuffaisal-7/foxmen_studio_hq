const express = require('express');
const { PrismaClient } = require('@prisma/client');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();
const prisma = new PrismaClient();

// Submit a message (Public)
router.post('/', async (req, res) => {
    const { name, email, subject, message } = req.body;
    try {
        const newMessage = await prisma.message.create({
            data: {
                name,
                email,
                subject,
                message
            }
        });
        res.status(201).json({ ...newMessage, _id: newMessage.id });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get all messages (Admin)
router.get('/', protect, async (req, res) => {
    try {
        const messages = await prisma.message.findMany({ orderBy: { createdAt: 'desc' } });
        const mappedMessages = messages.map(m => ({ ...m, _id: m.id }));
        res.json(mappedMessages);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete a message (Admin)
router.delete('/:id', protect, async (req, res) => {
    try {
        await prisma.message.delete({ where: { id: req.params.id } });
        res.json({ message: 'Message removed' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
