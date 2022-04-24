const mongoose = require("mongoose");

const url =
"mongodb+srv://Student:shukry1998@cluster1.uth5l.mongodb.net/Student?retryWrites=true&w=majority";

const ConnetDB = async () => {
  try {
    const con = await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    // console.log(`MongoDB connected : ${con.connection.host}`);
    console.log("MongoDB connectted");
  } catch (error) {
    console.log(error);
  }
};

module.exports = ConnetDB;
