const express = require("express") ; 
const router = express.Router() ; 
const { sendOtp } = require("../utils/otp");

const {uploadDoc ,  sendOTP, verifyOTP , getFiles } = require("../controllers/documentController");  
const { createFolder } = require("../middlewares/upload") ; 
const {signup} = require('../controllers/signup');
const {login} = require('../controllers/login');

const { Efile } = require("../controllers/EfileController") ; 

const Multer = require('multer') ;
const fs = require("fs") ; 
const path = require("path") ; 

const multer = Multer({
  storage : Multer.memoryStorage() 
}) ; 

// router.post("/enterDetails", sendOTP) ; 
router.post("/document/upload" ,multer.single('file') , uploadDoc ) ; 
// router.get( "/document/view", viewDoc) ; 

router.post("/Efile" , Efile ) ; 
router.post("/user/signup" , signup) ;
router.post("/user/login" , login )  ; 

// toDo : - write middle ware to check if a token exists or not 
router.get("/docs/:caseNo" , getFiles ) ; 


module.exports = router ;   
