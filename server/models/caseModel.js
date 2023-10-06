const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, required: true }, // Type of document (e.g., 'pdf', 'video', 'image', etc.)
  reference: { type: String, required: true }, // Reference to the document file or location
  description: { type: String }
});

const caseSchema = new mongoose.Schema({
  caseNumber: { type: String, required: true },
  caseTitle: { type: String, required: true },
  filingDate: { type: Date, required: true },
  caseType: { type: String, required: true },
  status: { type: String, required: true },
  courtLocation: { type: String, required: true },
  judge: { type: String, required: true },
  attorneys: [
    {
      name: { type: String, required: true },
      role: { type: String, required: true }
    }
  ],
  parties: [
    {
      name: { type: String, required: true },
      type: { type: String, required: true },
      attorney: { type: String }
    }
  ],
  documents: [documentSchema], // Array of documents
  proceedings: [
    {
      date: { type: Date, required: true },
      description: { type: String, required: true },
      outcome: { type: String, required: true }
    }
  ]
});

const Case = mongoose.model('Case', caseSchema);

module.exports = Case;
