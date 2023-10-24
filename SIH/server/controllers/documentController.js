const { generateOTP, sendOtp } = require('../utils/otp');
const Case = require('../models/caseModel');
const { Storage } = new require("@google-cloud/storage")  ; 

const storage = new Storage() ; 
const path = require("path") ; 
const fs = require("fs") ; 

exports.uploadDoc = async (req, res) => {
  console.log("hi there from controller");
  const bucketName = 'evidence-doc-bucket';
  const folderName = req.body.caseNo;
  const bucket = storage.bucket(bucketName);

  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  try {
    const gcsFileName = `${folderName}/${Date.now()}-${req.file.originalname}`;
    const gcsFile = bucket.file(gcsFileName);

    const stream = gcsFile.createWriteStream();

    stream.on('error', (err) => {
      console.error('Error uploading file to Google Cloud Storage:', err);
      res.status(500).json({ error: 'Failed to upload file to Google Cloud Storage' });
    });

    stream.on('finish', async () => {
      try {
        const caseDoc = await Case.findOne({ caseNumber: folderName });

        if (!caseDoc) {
          return res.status(500).json({ error: 'Error finding case' });
        }

        caseDoc.docLink.push(gcsFile.publicUrl());

        await caseDoc.save();

        res.status(200).json({ message: 'File successfully uploaded' });
      } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Database error' });
      }
    });

    stream.end(req.file.buffer);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Error uploading file to Google Cloud Storage' });
  }
};

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
      await sendOtp(mobileNumber, otp);
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
  
  
exports.getFiles = async (req , res) =>{
  const caseNo = req.params.caseNo ;
  
  console.log(caseNo ) ; 
  // console.log(__dirname) ; 
  const folderPath = path.join("/Users/aayus/Desktop/SIH/CMS/SIH/server/" , "public" , caseNo) ; 
  console.log(folderPath)

  if(!fs.existsSync(folderPath)) {
    return res.status(500).json({message : "No files were found"}) ; 
  }

  fs.readdir(folderPath, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read folder contents' });
    }
    res.json({ files });

    files.forEach( (file) => {
      console.log(file) ; 
    })
  });
}