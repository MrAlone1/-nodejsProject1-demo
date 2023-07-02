const mongoose = require("mongoose")
const SD = mongoose.Schema(
    {
        title:String,
        subtitle:String,
        imageUrl:String,
        class:String
    }
)

module.exports=mongoose.model("slider",SD)