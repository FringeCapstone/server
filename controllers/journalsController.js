const Journals = require('../models/journals');

exports.getJournals = async (req, res) => {
  Journals.fetchJournals(req.params.id)
      .then(journals => res.json(journals))
}
exports.getDocs = async (req, res) => {
  Journals.fetchAllDoc()
      .then(journals => res.json(journals))
}

exports.getAllJournals = async (req, res) => {
  Journals.fetchAll()
      .then(journals => res.json(journals))
}

exports.addJournal = async (req, res) => {
  Journals.addJournal(req.params.id, req.body)
      .then(journal => res.json(journal))
}
