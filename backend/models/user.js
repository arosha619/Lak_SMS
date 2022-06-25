// const mongoose = require("mongoose");
// const { text } = require("express");

// const userSchema = new mongoose.Schema({
//   firstname: {
//     type: String,
//     require: true,
//   },
//   lastname: {
//     type: String,
//     require: true,
//   },
//   dob: {
//     type: Date,
//     require: true,
//   },
//   password: {
//     type: String,
//     require: true,
//   },
//   email: {
//     type: String,
//     require: true,
//   },
  
//  companyname: {
//     type: String,
//     require: true,
//   },
//   address: {
//     type: String,
//     require: true,
//   },
//   designation: {
//     type: String,
//     require: true,
//   },
//   contactno: {
//     type: String,
//     require: true,
//   },
// });

// module.exports = mongoose.model("User", userSchema);


const { text } = require("express");
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
    type: Date,
    require: true,
  },
  email: {
    type: String,
    require: true,
    index:true, 
    unique:true,
    sparse:true,
    
  },
  password: {
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
  resetLink:{
    data: String,
    default:""
  }
});

module.exports = mongoose.model("User", userSchema);
