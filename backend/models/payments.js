const mongoose= require('mongoose');

const schema = mongoose.Schema;
const paymentschema = new schema({
    payer_name:{
         type: String,
         required:true
    },
    Bundle_name:{
        type: String,
        required: true
    },
    Price:{
        type: Number,
        required: true 
    },
    No_OF_SMS:{
        type: Number,
        required: true 
    },
    transDate:{
        type: String,
        required: true 
    },
    
})

const Payment = mongoose.model("Payment",paymentschema);
module.exports=Payment;