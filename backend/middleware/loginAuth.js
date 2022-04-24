const jwt = require("jsonwebtoken");
const { JWT_SECRECT } = require("../key");
const mongoose = require("mongoose");
const user = require("../models/user");

const authSign = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ err: "**you must be loged in**" });
  }

  const token = authorization.replace("mifras ", "");
  jwt.verify(token, JWT_SECRECT, (err, payload) => {
    if (err) {
      return res.status(401).json({ err: "**you must logeed in**" });
    }

    const { _id } = payload;
    user.findById(_id).then((userdata) => {
      req.user = userdata;
      next();
    });
  });
};
module.exports = authSign;
