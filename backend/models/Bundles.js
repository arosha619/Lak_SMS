const mongoose= require('mongoose');

const schema = mongoose.Schema;
const bundleschema = new schema({
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
    }
})

const Bundle = mongoose.model("Bundle",bundleschema);
module.exports=Bundle;