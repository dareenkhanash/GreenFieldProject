var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database-mongo');
var app = express();
var Users = require('./Models/users');
var Jobs = require('./Models/jobs');

//using react
app.use(express.static(__dirname + '/../react-client/dist'));
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/",function(req, res){
	var user = req.body;
	Users.createUsers(user, function(err, userdata){
		if(err){
			console.log(err);
		} else {
			res.send(userdata);
		}
	});
});


app.post('/:userName', function (req, res) {
  Users.getUser(req.body.userName,req.body.password,function(err,user){
  		if(err){
			console.log(err);
		} else {
			res.send(user);
		}
  });
});

app.put('/:userName', function (req, res) {
	var query = req.params.userName;
	var updatedData = req.body;
  Users.updateUsers(query, updatedData, function(err, users){
  		if(err){
			console.log(err);
		} else {
			res.send(users);
		}
  });
});

app.delete('/:userName', function (req, res) {
	var query = req.params.userName;
  Users.deleteUser(query, function(err, users){
  		if(err){
			console.log(err);
		} else {
			res.send(users);
		}
  });
});

// Jobs commands 
app.post('/:jobTitle', function(req, res){
	Jobs.createJob(req.body)
});

app.get('/:jobTitle', function (req, res) {
    Jobs.allJobs({}, function(err, jobs){
  		if(err){
			console.log(err);
		} else {
			res.send(jobs);
		}
  });
});

app.get('/:jobTitle', function (req, res) {
    Jobs.jobByTitle(req.params.jobTitle, function(err, job){
  		if(err){
			console.log(err);
		} else {
			res.send(job);
		}
  });
});


app.get('/:jobCatagory', function (req, res) {
    Jobs.jobsByCatagory(req.params.category, function(err, job){
  		if(err){
			console.log(err);
		} else {
			res.send(job);
		}
  });
});

// im not sure how to implement the time (from - to) :(


app.put('/:jobTitle', function(req, res){
	var query = req.params.jobTitle;
	var updatedData = req.body;
	Jobs.updateJobs(query, updatedData, function(err, jobs){
		if(err){
			console.log(err);
		} else {
			res.send(jobs);
		}
	});
});


app.delete('/:jobTitle', function(req, res){
	Jobs.deleteJob(req.body.jobTitle, function(err, job){
		if(err){
			console.log(err);
		} else {
			res.send(job);
		}
	});
});


var port = 3000
app.listen(port, function() {
  console.log('listening on port ' + port +'!');
});

