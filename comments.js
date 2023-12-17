// Create web server

// import express
const express = require('express');
const router = express.Router();

// import controller
const commentController = require('../controllers/commentController');

// import middleware
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

// routes
router.post('/create', auth, multer, commentController.createComment);
router.get('/:id', auth, commentController.getOneComment);
router.get('/', auth, commentController.getAllComments);
router.put('/:id', auth, multer, commentController.modifyComment);
router.delete('/:id', auth, commentController.deleteComment);

module.exports = router;