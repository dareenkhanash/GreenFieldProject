var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var redirect = require('express-redirect');
var db = require('../database-mongo/index.js');
var Users = require('./Models/users');
var Jobs = require('./Models/jobs');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var expressValidtor = require('express-validator');
var mongoStore = require('connect-mongo')(session);
var generateSecret = function (){
	var j, x;
	var random = ["f", "b", "C", "v", "I", "f", "N", "E", "j", "w", "i", "H", "N", "H", "z", "7", "n", "n", "a", "3", "V", "I", "Q", "J", "Q"]
	for (var i = random.length - 1; i > 0; i--) {
		j = Math.floor(Math.random() * (i + 1));
		x = random[i];
		random[i] = random[j];
		random[j] = x;
	}
	return random.join('');
};
var app = express();
redirect(app);

//using react
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(expressValidtor());
app.use(session({
	secret: generateSecret(),
	saveUninitialized: false,
	resave: false,
	store:new mongoStore({mongooseConnection: mongoose.connection}),
	cookie:{maxAge: 180*60*1000}
}));

// app.use(function(req,res,next){
// 	res.locals.session=req.session;
// 	next();
// })

app.get('/jobs', function(req, res){
	Jobs.allJobs(function(err, jobs){
		if(err){
			console.log(err);
		} else {
			console.log(jobs);
			res.send(jobs);
		}
	});	
});
app.post('/', function(req, res){
	res.send("hi");
});
app.get('/:userName', function(req, res){
	if(req.session.userName){
		res.send(req.session.userName)
	}
});
app.post("/signup",function(req, res){
	var user = req.body
	Users.createUsers(user, function(err, userdata){
		if(err){
			console.log(err);
		} else {
			res.send(userdata);
		}
	});
});

//login page 
// app.post('/login', function(req, res){
// 	var userName = req.userName
// 	var password = req.password
// 	Users.getUser(userName, password,  function (err, userName){
// 		//this function will check the username and password
// 		// if the username is not found 
// 		if (err){
// 			return res.send(err);
// 		} if (!userName){
// 			res.redirect('/login');
// 		} else {
// 			// need to create sessions here
// 			// if it was there it will take him to the main page
// 			res.session.user = userName
// 			//res.redirect('/Dashboard');
// 		}
// 	});
// });

// needs fixing
app.post('/Dashboard', function(req, res){
	if(!req.session.user){
		res.redirect('/login')
	}
});

// destroy sessions when logout
app.get('/logout', function (req, res) {
	req.session.destroy();
	res.send("logout success!");
});



app.post('/login', function (req, res) {
	Users.getUser(req.body.userName, req.body.password, function(err, user){
		if(err){
			console.log(err)
		} else {
			req.session.userName = user.userName;
			// req.session.password = user.password;
			// res.locals.login = user;
			// res.locals.session = req.session;
			res.redirect('/');
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
app.post('/job', function(req, res){
	Jobs.createJob(req.body, function(err,jobs){
		if(err){
			console.log(err);
		} else {
			console.log(jobs);
			res.send(jobs);
		}
	})
});

app.post('/someJobs', function (req, res) {

	Jobs.findSome(req.body.query, function(err, jobs){
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


app.post('/jobCategory', function (req, res) {
	Jobs.jobsByCategory({"category":req.body.category}, function(err, job){
		if(err){
			console.log(err);
		} else {
			res.send(job);
		}
	});
});

// im not sure how to implement the time (from - to)




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

