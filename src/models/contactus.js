const mongoose=require("mongoose")

const contact = mongoose.Schema({
    email:String,
    contactno:String,
    query:String
})

module.exports=mongoose.model("contactus",contact)