const Journals = require('../models/journals');

exports.getJournals = async (req, res) => {
  Journals.fetchJournals(req.params.id)
      .then(journals => res.json(journals))
}
// exports.getDocs = async (req, res) => {
//   Journals.fetchAllDoc()
//       .then(journals => res.json(journals))
// }

exports.getAllJournals = async (req, res) => {
  Journals.fetchAll()
      .then(journals => res.json(journals))
}

exports.addJournal = async (req, res) => {
  Journals.addJournal(req.params.id, req.body)
      .then(journal => res.json(journal))
}

exports.deleteJournal = async (req, res) => {
  Journals.deleteJournal(req.params.id, req.body.journalID)
      .then(() => res.status(204))
}

exports.updateJournal = async (req, res) => {
  const userId = req.params.id;
  const journalId = req.params.journalId;
  const content = req.body.content;

  if(!content) {
    return res.status(400).send({
      message: 'Content must be provided'
    });
  }

  try {
    await Journals.updateJournal(userId, journalId, content);
    res.status(200).send({
      message: 'Journal updated successfully'
    });
  }catch(error){
      console.error('Failed to update journal', error);
      res.status(500).send({
        error: 'Failed to update journal'
      });
    }
}
