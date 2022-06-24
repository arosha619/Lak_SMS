const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contactSchema = new Schema({
    
    fname : {
        type : String,
        required: true
    },

    lname : {
        type: String,
        required: true
    },
    number : {
        type: String,
        required: true
    },
    gender : {
        type : String,
        required: true
    },

    address : {
        type : String,
        required: true
    },
    dob : {
        type : Date,
        required: true
    }

    
})

const Contact = mongoose.model("ContactDetails",contactSchema);

module.exports = Contact;