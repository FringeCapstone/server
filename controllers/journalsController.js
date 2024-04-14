const Journals = require('../models/journals');

exports.getJournals = async (req, res) => {
  Journals.fetchAllJournals(req.params.id)
      .then(journals => res.json(journals))
}

exports.getAllJournals = async (req, res) => {
  Journals.fetchAll()
      .then(journals => res.json(journals))
}
