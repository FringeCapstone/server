const express = require('express');
const router = express.Router();
const documentController = require('../controllers/documentController');

router.get('/allDocs', documentController.getAllDocuments);
router.get('/doc/:id', documentController.getDocument);

exports.routes = router;
