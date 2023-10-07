const express = require("express") ; 
const router = express.Router() ; 

const {uploadDoc} = require("../controllers/documentController");  
const { createDirectory } = require("../middlewares/upload") ; 

const multer = require('multer') ;
const fs = require("fs") ; 
const path = require("path") ; 
// const createDirectory = (req, res, next) => {
//     const id = req.header('id');

//     if (!id) {
//       return res.status(400).send('ID not provided in the header');
//     }
  
//     const directoryPath = `./public/${id}`;
  
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
  
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      const id = req.header('id');
  
      if (!id) {
        return cb(new Error('ID not provided in the header'));
      }
  
      const directoryPath = `public/${id}`;

      if (!fs.existsSync(directoryPath)) {
        fs.mkdirSync(directoryPath, { recursive: true });
      }

      cb(null, directoryPath);
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
    }
  });

const upload  = multer({storage:storage}) ;



router.post("/document/upload", createDirectory , upload.single('file') , uploadDoc ) ; 
// router.get( "/document/view", viewDoc) ; 

module.exports = router ;   



