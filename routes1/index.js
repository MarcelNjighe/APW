
var express = require('express');
var app = express();
var path = require('path');

/* //parse and display the data
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const postRoute = require("./routes/posts");

//when user hits posts url transfer to postRoute
app.use("/posts", postRoute);
 */
// viewed at http://localhost:3000
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000);
console.log("The server is running at port 3000");
