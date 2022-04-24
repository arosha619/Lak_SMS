const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    require: true,
  },
  lastname: {
    type: String,
    require: true,
  },
  dob: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  
 companyname: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  designation: {
    type: String,
    require: true,
  },
  contactno: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("User", userSchema);
