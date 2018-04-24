var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost/jobsdb");

var db =mongoose.connection;
db.on("error",function(){
	console.log("connection error");
});
db.once("open",function() {
	console.log("connection opened");	
});

