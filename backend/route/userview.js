const router = require("express").Router();
const User = require("../models/user");


//userview

router.get("/userview", (req,res)=>{
  User.find(
   
  )
    .then((User)=>{
        
        res.json(User)
    }).catch((err)=>{
        console.log(err)
    })
});
module.exports = router;