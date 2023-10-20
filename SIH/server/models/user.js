const mongoose = require('mongoose');

const userSchema  = new mongoose.Schema({
    UID : {
        type : String , 
        unique :true , 
        required : true
    }, 
    fname : {
        type: String,
        required: true,
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mobile :{
        type : String , 
        required : true 
    }, 
    password: {
        type: String,
        required: true,
    }
}
);

module.exports = mongoose.model('User', userSchema);