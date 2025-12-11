const express = require('express');
const { PrismaClient } = require('@prisma/client');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();
const prisma = new PrismaClient();

// Get all posts
router.get('/', async (req, res) => {
    try {
        const posts = await prisma.post.findMany({ orderBy: { createdAt: 'desc' } });
        const mappedPosts = posts.map(p => ({ ...p, _id: p.id }));
        res.json(mappedPosts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get single post
router.get('/:idOrSlug', async (req, res) => {
    try {
        const { idOrSlug } = req.params;
        let post;

        const isUUID = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(idOrSlug);

        if (isUUID) {
            post = await prisma.post.findUnique({ where: { id: idOrSlug } });
        } else {
            post = await prisma.post.findUnique({ where: { slug: idOrSlug } });
        }

        if (!post) return res.status(404).json({ message: 'Post not found' });
        res.json({ ...post, _id: post.id });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create post
router.post('/', protect, async (req, res) => {
    const { title, excerpt, content, coverImage, tags, author, date, slug } = req.body;
    try {
        const finalSlug = slug || title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
        const newPost = await prisma.post.create({
            data: {
                title,
                excerpt,
                content,
                coverImage,
                tags,
                author,
                date: new Date(date),
                slug: finalSlug
            }
        });
        res.status(201).json({ ...newPost, _id: newPost.id });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update post
router.put('/:id', protect, async (req, res) => {
    const { title, excerpt, content, coverImage, tags, author, date, slug } = req.body;
    try {
        const updatedPost = await prisma.post.update({
            where: { id: req.params.id },
            data: {
                title,
                excerpt,
                content,
                coverImage,
                tags,
                author,
                date: date ? new Date(date) : undefined,
                slug
            }
        });
        res.json({ ...updatedPost, _id: updatedPost.id });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete post
router.delete('/:id', protect, async (req, res) => {
    try {
        await prisma.post.delete({ where: { id: req.params.id } });
        res.json({ message: 'Post removed' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
