const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    img : {
        type: String,
        required: true  
        // unique: true
    },
    summary : String
    // status : String
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;