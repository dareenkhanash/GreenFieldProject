var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = require('../database-mongo');
var Users=require('./Models/users');
var cookieParser=require('cookie-parser');
var session=require('express-session');
var expressValidtor=require('express-validator');
var mongoStore=require('connect-mongo')(session);
var app = express();
//using react
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(expressValidtor());
app.use(session({
	secret:'max',
	saveUninitialized:false,
	resave:false,
	store:new mongoStore({mongooseConnection:mongoose.connection}),
	cookie:{maxAge:180*60*1000}
	}));
app.use(function(req,res,next){
	res.locals.session=req.session;
	next();
})
app.get('/',function(req,res){
});
app.post("/signup",function(req,res){
	var user=req.body
	Users.createUsers(user,function(err,userdata){
		if(err){
			console.log(err)
		}else{
			res.send(userdata)
		}
	})

})

app.post('/login', function (req, res) {
  Users.getUser(req.body.userName,req.body.password,function(err,user){
  		if(err){
			console.log(err)
		}else{
			req.session.userName=user.userName;
			req.session.password=user.password;
			res.locals.login=user;
			res.locals.session=req.session;
			res.send(user);
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

