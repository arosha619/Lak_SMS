const mongoose = require("mongoose");

const url =
"mongodb+srv://user1:LakSMS@cluster0.nigz2.mongodb.net/?retryWrites=true&w=majority";

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
