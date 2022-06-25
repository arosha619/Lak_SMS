const mongoose= require('mongoose');


const Schema = mongoose.Schema ;
const messageSchema = new Schema({
    user_id: {
        type: String,
        require: true,
      },
    
    text:{
        type: String,
        required:true
    },
    createdAt: {
        type: Date,
        default: new Date(),
      }
    
   
    
})

const Message=mongoose.model("Message", messageSchema);

    
module.exports = Message;