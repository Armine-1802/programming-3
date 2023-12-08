//Lesson 3
// let Square = require("./scuare.js")
// let square = new Square(6)
// console.log(square.countscuare());
// let express = require("express");
// let app = express();

// app.use(express.static("."));

// app.get("/", function (req, res) {
// res.redirect("index.html");
// });

// app.listen(3000, function () {
// console.log("Example is running on port 3000");
// })

// console.log("hello")



// //Lesson 2


// let a = [1,2,5,8,7]

// console.log(a[1])


// let obj = {
//     mek:1,
//     anun: "Armine",
//     usanux: true,

// }

// // JSON.stringify - changed js objects to string

// let result = JSON.stringify(obj)

// // JSON.parse(result) change string to object


// console.log(obj.anun)

// obj.showInfo()



// let fs = require('fs');

// function main() {
//     let file = "ARMINE.txt"

//     fs.appendFileSync("ARMINE.TXT", "Hello world\n")
// }
// main();



let fs = require('fs');
function main(){
fs.writeFile("hello.txt", "Hello world\n", function(err){
console.log("fs.writeFile ended");
});
console.log("fs.writeFile");
}
main();