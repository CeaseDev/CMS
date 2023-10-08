const express = require("express");
const router = express.Router();

const { uploadDoc } = require("../controllers/documentController");


const multer = require('multer');
const fs = require("fs");
const path = require("path");
const createDirectory = (req, res, next) => {
  const id = req.header('id');

  if (!id) {
    return res.status(400).send('ID not provided in the header');
  }

  const directoryPath = `./public/${id}`;

  if (fs.existsSync(directoryPath)) {
    return next();
  }

  fs.mkdir(directoryPath, (err) => {
    if (err) {
      return res.status(500).send('Failed to create directory');
      console.log(error);
      process.exit(1);
    }
    next();
  });
};

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

const upload = multer({ storage: storage });

// mapping 

router.post("/document/upload", createDirectory, upload.single('file'), uploadDoc);

//for login 
// import login from '../controllers/login';
const login = require('../controllers/login');
router.use("/login", login);

const signup = require('../controllers/signup');
router.use("/signup", signup);

module.exports = router;   