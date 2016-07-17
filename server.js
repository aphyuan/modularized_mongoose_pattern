//standard express setup
var express = require('express');
app = express();
path = require('path');
var bodyParser = require('body-parser');

//app use
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//use mongoose database in config
require("./server/config/mongoose_setup.js");
//get routes
require("./server/config/routes.js")(app);
//basic Models now in models folder

//basic controllers now in controllers folder

//an Object doing stuff with usersSchema


//listen to the server
app.listen(8000, function() {
    console.log("listening on port 8000");
})
