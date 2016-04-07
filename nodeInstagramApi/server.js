//Packages we need
var express = require('express');
var app = express();
var ig = require('instagram-node').instagram();

//Configure the app

//site resources
app.use(express.static(__dirname + '/public'));

//set the view model to ejs
app.set('view engine', 'ejs');

//Configure instagram app with ID

//Set the routes

//home page route - popular images
app.get('/', function(req, res) {
    //use instagram package and render the page
    res.render('pages/index');
});

//Start the server
app.listen(8080);
console.log("App started!");
