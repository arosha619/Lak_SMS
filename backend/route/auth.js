const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const user = require("../models/user");
const jwt = require("jsonwebtoken");
const {
  JWT_SECRECT,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
} = require("../key");
//const { OAuth2Client } = require('google-auth-library');
//const client =new OAuth2Client(GOOGLE_CLIENT_ID);

//signUp
router.post("/signup", async (req, res) => {
  const user = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    dob: req.body.dob,
    email: req.body.email,
    password: req.body.password,
    companyname: req.body.companyname,
    address: req.body.address,
    designation: req.body.designation,
    contactno: req.body.contactno,
  });
  try {
    var emailexist = await User.findOne({ email: req.body.email });
    if (emailexist) {
      return res.status(400).json("Email already Exist");
    }
    var hashpsw = await bcrypt.hash(req.body.password, 10);

    const user = await new User({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      dob: req.body.dob,
      email: req.body.email,
      password: hashpsw,
      companyname: req.body.companyname,
      address: req.body.address,
      designation: req.body.designation,
      contactno: req.body.contactno,
    });
    var data = await user.save();
    return res.json(data);
  } catch (err) {
    return res.status(400).json(err);
  }
  return res.json(user);
});

// login

router.post("/login", async (req, res) => {
  try {
    var validemail = await User.findOne({ email: req.body.email });
    if (!validemail) {
      return res.status(400).json("Email not valid ");
    }

    var validpsw = await bcrypt.compare(req.body.password, validemail.password);
    if (!validpsw) {
      return res.status(400).json("Pasword not valid ");
    }

    //give token
    var usertoken = jwt.sign(
      { email: validemail.email, id: validemail._id },
      JWT_SECRECT
    );

    res.header("auth", usertoken).json({
      user_id: validemail._id,
      token: usertoken,
    });
  } catch (error) {
    return res.status(400).json(err);
  }
});
//valid user
const Validuser = (req, res, next) => {
  var token = req.header("auth");
  req.token = token;
  next();
};

//google login
// router.post("/google",async(req,res)=>{
// const googleAuth =(token)=>{
//   const ticket = client.verifyIdToken({
// idToken:token,
// audiance :GOOGLE_CLIENT_ID,

//   });
//   const payload = ticket.getPayload();
//   console.log("User ${payload.name} verified");
//   const{sub,email,name,picture}=payload;
//   const userId=sub;
//   return {userId,email,fullName:name,photoUrl:picture}
// };

// });

module.exports = router;
