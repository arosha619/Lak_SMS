const router = require("express").Router();
let Bundle = require("../models/Bundles");

//create
router.route("/add").post((req, res) => {
  const Bundle_name = req.body.Bundle_name;
  const Price = Number(req.body.Price);
  const No_OF_SMS = Number(req.body.No_OF_SMS);

  const newbundle = new Bundle({
    Bundle_name,
    Price,
    No_OF_SMS,
  });

  newbundle
    .save()
    .then(() => {
      res.json("Bundle add successfully!");
    })
    .catch((err) => {
      console.log(err);
    });
});

//update
router.route("/update/:id").put(async(req,res)=>{
    let userID=req.params.id;
   
    const {Bundle_name,Price,No_OF_SMS}=req.body;
     
    const updateBundle={
        Bundle_name,Price,No_OF_SMS,
    }
    const update=await Bundle.findByIdAndUpdate(userID,updateBundle)
    .then(()=>{
        res.status(200).send({status:"Bundle updated!"})
    }).catch((err)=>{
        res.status(500).send({status:"error with updating",error:err.message})
    })      
})

//delete
router.route("/delete/:id").delete(async(req,res)=>{
    let userId= req.params.id;

    await Bundle.findByIdAndDelete(userId)
    .then(()=>{
        res.status(200).send({status:"Bundle deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"error with deletion",error:err.message})
    })
})
//read
router.route("/").get((req,res)=>{
    Bundle.find()
    .then((Bundles)=>{
        res.json(Bundles)
    }).catch((err)=>{
        console.log(err)
    })
})
module.exports = router;
