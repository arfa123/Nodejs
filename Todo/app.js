var http = require("http");
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

var todos = [];
app.locals.todos = todos;

app.use(logger("short"));

app.use(bodyParser.urlencoded({extended: false}));

app.get("/", function(req,res){
    res.render("index");
});

app.get("/new-entry", function(req,res){
    res.render("new-entry");
});

app.get("/todos", function(req,res){
    res.render("todos");
});

app.post("/new-entry", function(req,res){
    todos.push({
        title: req.body.title,
        content: req.body.content,
        published: new Date()
    });
    res.render("todos");
});

http.createServer(app).listen(3000, function(){
    console.log("App started on port 3000");
});