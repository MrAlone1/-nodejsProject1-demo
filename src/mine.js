const express = require("express");
const mongoose = require("mongoose")
const hbs = require("hbs")
const app = express()
const Detail =require("./models/Detail")
const slider =require("./models/slider")
const service=require("./models/service")
const bodyparser=require("body-parser")
const routes = require("./routes/firstmain")

//routes start
app.use('/static',express.static("public"))

//bodyparser 
app.use(bodyparser.urlencoded({
    extended:true
}))

//routing 
app.use('',routes)
// app.get("/Alone",(request,response)=>{
//     response.send("this data from server")
// })

//routes end

//hbs and views
app.set("view engine","hbs")
app.set("views","views")
hbs.registerPartials("views/partials")

//db connections
// mongoose.connect("mongodb://127.0.0.1:27017/nodejsProject"
// // ,{
// //     useNewUrlParser: true, 
// //     useUnifiedTopology: true,
// //     //useFindAndModify: true,
// //     //useCreateIndex: true
// // }
// )
// .then(()=>console.log('connection success'))
// .catch((err)=>console.log(err))

mongoose.connect("mongodb://127.0.0.1/nodejsProject").then(()=>{
    console.log("hi db")
    
    //do for one time onle store data otherwise repeate
    // Detail.create({
    //     brandname: "Shopppit",
    //     brandIconUrl:"public/css/images/brand.png",
    //     links:[
    //         {
    //             label:"Home",
    //             url:"/"
    //         },
    //         {
    //             label:"About",
    //             url:"/about"
    //         }
    //     ]
    // })
    // slider.create(
    //     [
    //         {
    //             title:"Nodejs Project",
    //             subtitle:"Good to learn",
    //             imageUrl:"",
    //             class:"active"
    //         },
    //         {
    //             title:"Mongodb Project",
    //             subtitle:"Good to learn",
    //             imageUrl:"",
    //             class:""
    //         },
    //         {
    //             title:"Expressjs Project",
    //             subtitle:"Good to learn",
    //             imageUrl:"",
    //             class:""
    //         }
    //     ]
    // ) 
    // service.create([
    //     {
    //         icon:'fab fa-accusoft',
    //         title:'Provide Best Cources',
    //         description:'good',
    //         link1:'',
    //         link2:''
    //     },
    //     {
    //         icon:'fa-brands fa-squar-js',
    //         title:'Provide Best Cources',
    //         description:'good',
    //         link1:'',
    //         link2:''
    //     },
    //     {
    //         icon:'fa-brands fa-python',
    //         title:'Provide Best Cources',
    //         description:'good',
    //         link1:'',
    //         link2:''
    //     },
    //     {
    //         icon:'fab fa-accusoft',
    //         title:'Provide Best Cources',
    //         description:'good',
    //         link1:'',
    //         link2:''
    //     }
    // ])
    //db insert end
 })

//  //schema for database
//  const userSchema = new mongoose.Schema({
//     fistname:{
//         type: String,
//         required: true,
//     },
//     lastName:{
//         type:String,
//     },
//     email:{
//         type: String,
//         required : true,
//         unique: true,
//     }
//  })

//  //pushing data to dbs
//  const user = mongoose.model("user",userSchema)

//port created
app.listen(process.env.PORT || 3001,()=>{console.log("server started")});

