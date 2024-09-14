const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const legalSchema=new Schema({
    name:String,
    meaning:String,
    info:String,
});

const Legal=mongoose.model("Legal",legalSchema);
module.exports=Legal;