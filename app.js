const express = require("express");
const app = express();
const http = require('http');

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/Test1/", function(req, res){
res.render("Test1.ejs");
});

app.get("/Test2/:route", function(req, res){
res.render("Test2.ejs")
});

const server = http.createServer(app);
server.listen(3000);
