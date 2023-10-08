const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, required: true }, // Type of document (e.g., 'pdf', 'video', 'image', etc.)
  reference: { type: String, required: true }, // Reference to the document file or location
  description: { type: String }
});


import Attorneys from './attorneys';
import Judge from './judge';
const caseSchema = new mongoose.Schema({

import Attorney from './attorneys';
import Judge from './judge';
const caseSchema = new mongoose.Schema({

  caseNumber: { type: String, required: true },
  caseTitle: { type: String, required: true },
  caseType: { type: String, required: true },
  caseStatus: { type: Boolean, required: true, default: false }, //false == not complete 

  judge: {
    type: mongoose.SchemaType.judge,
    ref: "Judge"
    //no required here as judge is not initially assigned 
  },

  party1: {
    type: mongoose.SchemaType.judge,
    ref: "Attorneys"
  },
  party2: {
    type: mongoose.SchemaType.judge,
    ref: "Attorneys"
  },

  proceding: [{
    date: {
      type: Date,
      default: Date.now
    },

    type: mongoose.SchemaType.lawyerSchema,
    ref: "Attorney"
  },
  party2: {
    type: mongoose.SchemaType.lawyerSchema,
    ref: "Attorney"
  },

  proceding: [{
    date: { default: new Date() },
    description: { type: String, required: true },
    outcome: { type: String, required: true }
  }]

}, { timestamps: true });


const Case = mongoose.model('Case', caseSchema);

module.exports = Case;
