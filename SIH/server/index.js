const express = require("express");
const app = express();
const twilio = require('twilio');
const { generateOTP, sendOTP } = require('./utils/otp');
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser") ;

// const multer  = require('multer');
// const upload = multer();
// app.use(upload.any()) ; 

app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );

dotenv.config();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

const user = require("./routes/user");
app.use("/api/v1", user);


const dbConnect = require("./config/db");
dbConnect();

app.listen(PORT, () => {
    console.log(`App is running at ${PORT}`);
})

