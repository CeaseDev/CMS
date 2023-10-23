const fs = require("fs") ; 
const path = require("path") ; 


const { Storage } = require('@google-cloud/storage');

const projectId = 'hex-treme';
const storage = new Storage({
  projectId, 
});

exports.createFolder= (req, res, next) => {
  console.log("hii there from middleware" ) ; 
  const bucketName = 'evidence-doc-bucket';
  const folderName = req.body.caseNo ; // Replace 'id' with the actual parameter name

  const bucket = storage.bucket(bucketName);
  const folder = bucket.file(folderName);

  folder.exists()
    .then((data) => {
      const [exists] = data;

      if (!exists) {
        // Folder doesn't exist, create it
        return folder.save('');
      }
    })
    .then(() => {
      req.folder = folderName;
      next();
    })
    .catch((err) => {
      console.error('Error creating folder in Google Cloud Storage:', err);
      res.status(500).send('Error creating folder in Google Cloud Storage.');
    });

    console.log("hii there from middleware 2nd time " ) ; 

};



// exports.createDirectory = (req, res, next) => {
//     const caseNo = req.params.caseNo;

//     if (!caseNo) {
//       return res.status(400).send('ID not provided in the header');
//     }
  
//     const directoryPath = `./public/${caseNo}`;
  
//     if (fs.existsSync(directoryPath)) {
//       return next();
//     }
  
//     fs.mkdir(directoryPath, (err) => {
//       if (err) {
//         return res.status(500).send('Failed to create directory');
//         console.log(error) ; 
//         process.exit(1) ; 
//       }
//       next();
//     });
//   };
  
 


