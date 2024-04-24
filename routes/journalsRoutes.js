const express = require('express');
const router = express.Router();
const journalsController = require('../controllers/journalsController');

// router.get('/showJournals', journalsController.getAllJournals);// wont have implemented
router.get('/journal/:id', journalsController.getJournals);
router.post('/journal', journalsController.addJournal);
router.delete('/journal/:id', journalsController.deleteJournal)
router.put('/journal/:id', journalsController.updateJournal)

exports.routes = router;
