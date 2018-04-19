var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database-mongo');
var app = express();
var Users=require('./Models/users');
//using react
//app.use(express.static(__dirname + '/../react-client/dist'));
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/",function(req,res){
	var user=req.body
	Users.createUsers(user,function(err,userdata){
		if(err){
			console.log(err)
		}else{
			res.send(userdata)
		}
	})

})

app.get('/:userName', function (req, res) {
	
  Users.getUser(req.params.userName,function(err,user){
  		if(err){
			console.log(err)
		}else{
			res.send(user)
		}
  })
});

app.put('/:userName', function (req, res) {
	var query=req.params.userName;
	var updatedData=req.body

  Users.updateUsers(query,updatedData,function(err,users){
  		if(err){
			console.log(err)
		}else{
			res.send(users)
		}
  })
});

app.delete('/:userName', function (req, res) {
	var query=req.params.userName;

  Users.deleteUser(query,function(err,users){
  		if(err){
			console.log(err)
		}else{
			res.send(users)
		}
  })
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

