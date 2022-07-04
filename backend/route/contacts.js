const router = require("express").Router();
const mongoose = require("mongoose");
const Contacts = require("../models/Contacts");

router.get("/categorize", async (req, res) => {
  const { user_id, gender, location } = req.query;
  console.log("type of user", user_id);
  if (user_id) {
    try {
      const data = await Contacts.find({ user_id: user_id });
      console.log("data", data);
      const filteredData = data.filter((u) => u.user_id === user_id);
      console.log("filtered data", filteredData);

      const filterTwo = filteredData.filter(
        (f) => f.gender === gender && f.address === location
      );

      res.send({
        message: "data retriew successfully",
        contact_details: filterTwo,
      });
    } catch (error) {
      console.log(error);
      res.send({ message: "data retriew Fail", count: null });
    }
  } else {
    res.send({
      message: "data retriew Fail, no req parm found",
      count: null,
    });
  }
});

router.route("/add").post((req, res) => {
  const user_id = req.body.user_id;
  const fname = req.body.fname;
  const lname = req.body.lname;
  const number = req.body.number;
  const gender = req.body.gender;
  const address = req.body.address;
  const dob = req.body.dob;

  const newContact = new Contacts({
    user_id,
    fname,
    lname,
    number,
    gender,
    address,
    dob,
  });
  newContact
    .save()
    .then(() => {
      res.json("Contact Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
