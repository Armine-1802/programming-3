let express = require("express");
let app = express();

app.use(express.static("."));

app.get("/", function (req, res) {
res.redirect("index.html");
});

app.listen(3000, function () {
console.log("Example is running on port 3000");
})

console.log("hello")