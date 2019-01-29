var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");
var exphbs = require("express-handlebars")
// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
var axios = require("axios");
var cheerio = require("cheerio");

var PORT = process.env.PORT || 3000;

var app = express();

var router = express.Router();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var db = process.env.MONGODB_URI || "mongodb://localhost/siteScraper";
mongoose.connect(db, function(error){
    if (error){
        console.log(error);
    }
    else {
        console.log("Mongoose connection successful");
    }
});

app.use(logger("dev"));

router.get("/", function (req, res) {
    res.render("index", {});
});

app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});
