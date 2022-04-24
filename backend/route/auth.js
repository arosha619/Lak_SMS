const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/user");

const jwt = require("jsonwebtoken");
const { JWT_SECRECT } = require("../key");
const loginAuth = require("../middleware/loginAuth");

router.get("/protected", loginAuth, (req, res) => {
  res.send("this is work");
});

router.post("/signup", (req, res) => {
  const { firstname, lastname,email, password } = req.body;

  if (!firstname ||!lastname || !email || !password) {
    return res.status(400).json({ err: "**please fil this form**" });
  }

  User.findOne({ email: email }).then((savedUser) => {
    if (savedUser) {
      return res.status(400).json({ err: "**user already exits**" });
    }
    bcrypt
      .hash(password, 15)
      .then((hashedPassword) => {
        const user = new User({
          firstname,
          lastname,
          email,
          password: hashedPassword,
        })
          .save()
          .then((user) => {
            return res.json({ msg: "**Signup successfully**" });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  });

  if (!validateEmail(email)) {
    return res.status(400).json({ err: "**invalid email check again**" });
  }

  if (password.length < 6) {
    return res
      .status(400)
      .json({ err: "**password should be morethan 06 char**" });
  }
});

router.post("/signin", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(404).json({ err: "please enter email and password" });
  }

  User.findOne({ email }).then((saveUser) => {
    if (!saveUser) {
      return res.status(422).json({ err: "Invalid email and passsword" });
    }

    bcrypt
      .compare(password, saveUser.password)
      .then((doMatch) => {
        if (doMatch) {
          const { _id, name, email } = saveUser;
          const token = jwt.sign({ _id: saveUser._id }, JWT_SECRECT);
          res.json({ token, user: { _id, name, email } });
        } else {
          res.status(422).json({ err: "Invalid email and passsword" });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  });
});

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

module.exports = router;
