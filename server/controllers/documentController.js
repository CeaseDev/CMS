const { generateOTP, sendOTP } = require('../utils/otp');
const User = require('../models/user');
const Judge = require('../models/judge');
const Attorney = require('../models/attorneys');

exports.uploadDoc = async  (req , res) =>{
    console.log(req.file) ;
    
    res.json({message : "success"}) ; 
}

const sendOTP = async (req, res) => {
    const { caseNumber, mobileNumber } = req.body;
  
    const otp = generateOTP();
  
    // Save the OTP in a temporary storage (e.g., session, database, or memory)
    // In this example, we save it to a variable
    const temporaryStorage = {
      [mobileNumber]: otp,
    };
  
    // Send the OTP via SMS using Twilio
    try {
      await sendOTP(mobileNumber, otp);
      res.json({ message: 'OTP sent for verification.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to send OTP.' });
    }
  };


  const verifyOTP = (req, res) => {
    const { caseNumber, mobileNumber, otp } = req.body;
  
    // Retrieve the saved OTP from temporary storage
    const savedOTP = temporaryStorage[mobileNumber];
  
    if (otp === savedOTP) {
      // OTP is valid
      Case.findOne({ caseNumber }, (err, foundCase) => {
        if (err) {
          return res.status(500).json({ message: 'Database error.' });
        }
  
        if (!foundCase) {
          return res.status(404).json({ message: 'Case not found.' });
        }
  
        // Check if the mobile number matches one of the parties involved in the case
        const { judge, party1, party2 } = foundCase;
        if (party1.mobileNumber === mobileNumber) {
          return res.json({ message: `User with role ${party1.role} found, redirecting...` });
        } else if (party2.mobileNumber === mobileNumber) {
          return res.json({ message: `User with role ${party2.role} found, redirecting...` });
        } else if (judge.mobileNumber === mobileNumber) {
          return res.json({ message: 'Judge found, redirecting...' });
        } else {
          return res.json({ message: 'User not related to the case.' });
        }
      });
    } else {
      // Invalid OTP
      res.status(400).json({ message: 'Invalid OTP' });
    }
  };
  
  
  
  
  