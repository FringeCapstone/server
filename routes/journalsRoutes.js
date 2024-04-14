const express = require('express');
const router = express.Router();
const journalsController = require('../controllers/journalsController');

router.get('/showJournals', journalsController.getAllJournals);
router.get('/showJournals/:id', journalsController.getJournals);


exports.routes = router;
