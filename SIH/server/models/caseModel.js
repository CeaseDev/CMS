const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, required: true }, // Type of document (e.g., 'pdf', 'video', 'image', etc.)
  reference: { type: String, required: true }, // Reference to the document file or location
  description: { type: String }
});

const caseSchema = new mongoose.Schema({

  caseNumber : {type : String , required : true  }, 
  claimantFName : { type: String, required: true },
  claimantFastName: { type: String, required: true },
  claimantEmail: { type: String, required: true },
  claimantPhone: { type: String, required: true },
  claimantAddress : { type: String, required: true }, 
  claimantCity: { type: String, required: true },
  claimantState: { type: String, required: true },
  claimantZip : { type: String, required: true }, 
  
  respondantFName : { type: String, required: true },
  respondantFastName: { type: String, required: true },
  respondantEmail: { type: String, required: true },
  respondantPhone: { type: String, required: true },
  respondantAddress : { type: String, required: true }, 
  respondantCity: { type: String, required: true },
  respondantState: { type: String, required: true },
  respondantZip : { type: String, required: true }, 
  caseDescription: { type: String } , 
  docLink : [ { type: String }] 
}) ; 


const Case = mongoose.model('Case', caseSchema);

module.exports = Case;
