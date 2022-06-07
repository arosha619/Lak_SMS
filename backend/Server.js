const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const ConnetDB = require("./db");

const PORT = 6000;

require("./models/user");

//DB connection
ConnetDB();

//
app.use(cors());
app.use(express.json());
const auth = require("./route/auth");


//Route
app.use("/", auth);


app.get("/", (req, res) => {
  console.log("This is server ");
  res.send("Hello wolrd");
});

//bundles route
const bundlerouter= require("./route/bundle");
app.use("/bundle",bundlerouter);

//PORT

app.listen(PORT, () => {
  console.log("server has been stared", PORT);
});
