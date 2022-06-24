const router = require("express").Router();
let Contact = require("../models/contact");

router.route("/add").post((req,res)=>{

    
    const fname = req.body.fname;
    const lname = req.body.lname;
    const number=req.body.number;
    const gender = req.body.gender;
    const address = req.body.address;
    const dob = req.body.dob;

    const newContact = new Contact({

        fname,
        lname,
        number,
        gender,
        address,
        dob,
    })
    newContact.save().then(()=>{
        res.json("Contact Added")
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/").get((req,res)=>{
    Contact.find().then((contacts)=>{
        res.json(contacts)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async (req,res) => {
    let userId = req.params.id;
    const {fname, lname, number, gender, address, dob} = req.body;

    const updateContact = {
        fname,
        lname,
        number,
        gender,
        address,
        dob
    }
    const update = await  Contact.findByIdAndUpdate(userId, updateContact)
    .then(() => {
        res.status(200).send({status: "Contact updated"})
    }).catch((err) =>{
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.messege});
    })
})


router.route("/delete/:id").delete(async (req,res) => {
    let userId = req.params.id;

    await Contact.findByIdAndDelete(userId)
    .then(() =>{
        res.status(200).send({status: "Contact deleted"});
    }).catch((errr) => {
        console.log(err.messege);
        res.status(500).send({status: "Error with delete user", error: err.messege});
    })
})

router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;
    const user = await Contact.findById(userId)
    .then((contatct) => {
        res.status(200).send({status: "Contact fetched", contatct})
    }).catch(() => {
        console.log(err.messege);
        res.status(500).send({status: "Error with get user",error: err.messege});
    })
})
module.exports = router;
