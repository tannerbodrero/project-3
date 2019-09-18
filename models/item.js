const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({

    img:{
        type: String,
        required: true,
     },

     name:{
        type: String,
        required: true,
     },

     details:{
        type: String,
        required: true,
     },
     
     postedBy:{
        type: String,
        required: true,
     },

     lookingFor:{
        type: String
     },

     email:{
        type: String,
        required: true
     },
   
})

var Item = mongoose.model("Item", itemSchema);

module.exports = Item;