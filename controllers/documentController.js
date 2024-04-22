const Documents = require('../models/documents');

exports.getAllDocuments = async (req, res) => {
  Documents.fetchAllDoc()
  .then(documents => res.json(documents))
}

exports.getDocument = async (req, res) => {
  Documents.fetchDocument(req.params.id)
      .then(documents => res.json(documents))
}
