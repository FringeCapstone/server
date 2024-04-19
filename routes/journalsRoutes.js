const express = require('express');
const router = express.Router();
const journalsController = require('../controllers/journalsController');

router.get('/showJournals', journalsController.getAllJournals);// wont have implemented
router.get('/showdocs', journalsController.getDocs);// wont have implemented
router.get('/showJournals/:id', journalsController.getJournals);
router.post('/new', journalsController.addJournal);


exports.routes = router;
