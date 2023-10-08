const mongoose = require("mongoose");

dotenv = require("dotenv");

dotenv.config();


const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true, useUnifiedTopology: true,
    })
        .then(() => console.log("DB connection Success"))
        .catch((err) => {
            console.log("issue in Db connection");
            process.exit(1);
        });
}

module.exports = dbConnect; 