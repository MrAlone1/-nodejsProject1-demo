// class car{
//     // constructor(name,year){
//     //     this.name =name;
//     //     this.year = year;

//     // }
//     age(name,year){
//         this.name = name
//         this.year = year
//         let date = new Date()
//         return date.getFullYear() - this.year
//     }
// }      

// var mycar = new car()
// var mecar = mycar.age("lambourgani",2014)
// var http = require('http')
//  http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':'text/html'})
//     res.write(mecar)
//     res.end()
//  }).listen(3000)

// Importing express module
const express = require('express');
const app = express();

// Getting Request
app.get('/', (req, res) => {

	// Sending the response
	res.send('Hello World!')
	
	// Ending the response
	res.end()
})

// Establishing the port
const PORT = process.env.PORT ||5000;

// Executing the server on given port number
app.listen(PORT, console.log(
`Server started on port ${PORT}`));
