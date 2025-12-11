const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');

const router = express.Router();
const prisma = new PrismaClient();

// @route   POST /api/auth/register
// @desc    Register a new admin (First time setup)
// @access  Public
router.post('/register', async (req, res) => {
    const { username, password } = req.body;

    try {


        const existingAdmin = await prisma.admin.findUnique({ where: { username } });
        if (existingAdmin) return res.status(400).json({ message: 'Admin already exists' });

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newAdmin = await prisma.admin.create({
            data: {
                username,
                password: hashedPassword
            }
        });

        res.status(201).json({ message: 'Admin registered successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Login Admin
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const admin = await prisma.admin.findUnique({ where: { username } });
        if (!admin) return res.status(400).json({ message: 'Invalid credentials' });

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ id: admin.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token, admin: { id: admin.id, username: admin.username } });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
