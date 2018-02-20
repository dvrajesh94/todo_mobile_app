var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

app.use(cors());
app.use(bodyparser.urlencoded({ 'extended': true }));

app.use(bodyparser.json())

mongoose.connect('mongodb://localhost:27017/myTodoList');

mongoose.connection.on('connected', function(){
	console.log('connected to dataBase mongodb @ localhost');
});

mongoose.connection.on('err', function(err){
	if(err){
		console.log('Error connecting to dataBase mongodb @ localhost', err);
	}
});

const route = require('./route');

app.get('/', function(req, res) {
  console.log("Hey, I am here");
});

app.use('/api', route);

//app.use(express.static(__dirname + "/../mytodos/www"));

app.listen(4000, function(){
    console.log("server running on port 4000");
});
