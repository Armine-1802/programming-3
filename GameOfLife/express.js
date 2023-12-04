//Lesson 3

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



//Lesson 2


let a = [1,2,5,8,7]

console.log(a[1])


let obj = {
    mek:1,
    anun: "Armine",
    usanux: true,

}

// JSON.stringify - changed js objects to string

let result = JSON.stringify(obj)

// JSON.parse(result) change string to object


console.log(obj.anun)

obj.showInfo()