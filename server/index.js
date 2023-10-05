const express = require("express") ; 
const app = express() ; 

const dotenv = require("dotenv")

dotenv.config() ; 
const PORT = process.env.PORT  || 3000 ; 

app.use(express.json())  ;

const dbConnect = require("./config/db") ; 
dbConnect() ; 

app.listen(PORT , () => {
    console.log(`App is running at ${PORT}`) ;
})
 
app.get("/" , (req , res) => {

})
