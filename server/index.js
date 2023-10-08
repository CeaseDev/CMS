const express = require("express");
const app = express();

const dotenv = require("dotenv")

dotenv.config();
const PORT = process.env.PORT || 3000;

app.use(express.json());
const user = require("./routes/user");
app.use("/api/v1", user);


const dbConnect = require("./config/db");
dbConnect();

app.listen(PORT, () => {
    console.log(`App is running at ${PORT}`);
})

// app.get("/", )