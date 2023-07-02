const express = require("express")
const Detail = require("../models/Detail")
const slider = require("../models/slider")
const Serv = require("../models/service")
const contactus=require("../models/contactus")
const async = require("hbs/lib/async")





const route = express.Router()

route.get("/", async (req,res)=>{
    //res.send("my first route file")
    const details = await Detail.findOne({"_id":"649f7be5bba9c98c575290f5"})
    const slid = await slider.find()
    const Sv = await Serv.find()
    //console.log(slid)
    res.render("index",{
        details : details,
        slider : slid,
        service : Sv
    })
}

)

route.get("/about", async (req,res)=>{
    //res.send("my first route file")
    const details = await Detail.findOne({"_id":"649f7be5bba9c98c575290f5"})
    const slid = await slider.find()
    const Sv = await Serv.find()
    res.render("about",{
        details : details,
        slider : slid,
        service : Sv
    })
}
)

route.post("/processContactUs",(req,res)=>{
    //data fatching from form
    //console.log(req.body)
    try{
        const data= contactus.create(req.body)
        res.redirect("/")
    }catch(e)
    {
        console.log(e)
        res.redirect("/error")
    }
})

module.exports=route