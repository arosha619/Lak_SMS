


const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const ConnetDB = require("./db");
const auth = require("./route/auth");
const userview = require("./route/userview");
const morgan = require("morgan");

app.use(express.json());
app.use(morgan('dev'));




const PORT = 5000;
require("dotenv").config();





//DB connection
ConnetDB();


app.use(cors());



//Route

app.use("/", auth);
//userview Route

app.use("/userview",userview);


app.get("/", (req, res) => {
  console.log("This is server ");
 return res.send("Hello wolrd");
});
//bundles route
const bundlerouter= require("./route/bundle");
app.use("/bundle",bundlerouter);

//message route

const messagerouter= require("./route/message.js");
app.use("/message", messagerouter);


//PORT

app.listen(PORT, () => {
  console.log("server has been stared", PORT);
});



