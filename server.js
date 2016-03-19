#! bin/env node
var express = require('express');
var app = express();
var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;
var bodyParser    = require('body-parser');
var multer        = require('multer');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());

app.use(express.static(__dirname + '/public'));

//Default route
// app.get('/', function(req, res){
//     res.send('Hello!!');
// });

app.get('/hello', function(req, res){
    res.send('hello world');
});

//Test API interface
app.get('/json/projects', function(req, res){
    var projects = [{title: "Realtime Data Analytics of Semantic Web", year: 2013, stack:"Node.js, Express, MongoDB",
    organization: "Heriot-Watt University, Dubai Campus", description: "Realtime sentiment analytics of twitter feeds."},
        {title: "My City Amigo", year: 2014, stack: "Ruby on Rails", organization: "My City Amigo",
        description: "A web portal that provided a complete event package to the user."},
        {title: "Model User Preferences using KNN", year: 2015, stack: "Python, MongoDB", organization: "Northeastern University",
            description: "An AI based system that models a user based on his previous preferences."}];
    res.json(projects);
});

require("./public/assignment/server/app.js")(app);

app.listen(port, ipaddress);