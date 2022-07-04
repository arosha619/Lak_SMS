const router = require("express").Router();
let Payment = require("../models/payments");

//create
router.route("/add").post((req, res) => {
  // const { user_id } = req.query;
  const payer_name = req.body.payername;
  const Bundle_name = req.body.bundleName;
  const Price = Number(req.body.bundleprice);
  const No_OF_SMS = Number(req.body.sms);
  const transDate = String(req.body.d);

  const newpayment = new Payment({
    // user_id,
    payer_name,
    Bundle_name,
    Price,
    No_OF_SMS,
    transDate,
  });
  console.log(newpayment);
  newpayment
    .save()
    .then(() => {
      res.json("payment details added successfully!");
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
