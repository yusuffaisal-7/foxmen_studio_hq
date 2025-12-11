const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();

// Configure storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname.replace(/ /g, '_')}`);
    }
});

// Check file type
const checkFileType = (file, cb) => {
    const filetypes = /jpeg|jpg|png|webp|gif/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Error: Images Only!');
    }
};

// Init upload
const upload = multer({
    storage: storage,
    limits: { fileSize: 5000000 }, // 5MB limit
    fileFilter: (req, file, cb) => {
        checkFileType(file, cb);
    }
});

// @route   POST /api/upload
// @desc    Upload an image
// @access  Public (or Private if preferred)
router.post('/', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).send({ message: 'No file uploaded' });
    }
    // Return the path relative to the server root, which we'll server statically
    // We'll return the full URL if we knew the host, but relative path is safer for now.
    // Actually, usually we return "/uploads/filename"
    res.send({
        message: 'File uploaded successfully',
        filePath: `/uploads/${req.file.filename}`
    });
});

module.exports = router;
