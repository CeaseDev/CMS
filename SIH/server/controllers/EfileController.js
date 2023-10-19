const mongoose = require("mongoose");  

const Case = require("../models/caseModel") ; 

exports.Efile = async (req , res )=>{

  const uniqueCode = `${Date.now()}${Math.floor(Math.random() * 1000000)}`.substring(3, 15) ; 
    try {
        // Create a new instance of the `Case` model with data from the request body
        const newCase = new Case({
          caseNumber : uniqueCode, 
          claimantFName: req.body.fname,
          claimantFastName: req.body.lname,
          claimantEmail: req.body.email,
          claimantPhone: req.body.phone,
          claimantAddress: req.body.address,
          claimantCity: req.body.city,
          claimantState: req.body.region,
          claimantZip: req.body.postalcode,
          respondantFName: req.body.resfname,
          respondantFastName: req.body.reslname,
          respondantEmail: req.body.resemail,
          respondantPhone: req.body.resphone,
          respondantAddress: req.body.resaddress,
          respondantCity: req.body.rescity,
          respondantState: req.body.resregion,
          respondantZip: req.body.respostalcode,
          caseDescription: req.body.desc,
        });
    
        // Save the new case to the database
        const savedCase = await newCase.save();
    
        res.json({ message: 'Case saved successfully', data: savedCase });
      } catch (error) {
        res.status(500).json({ error: 'An error occurred while saving the case' });
      }
}