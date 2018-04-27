var mongoose=require("mongoose");
mongoose.connect("mongodb://RBK:rbk12345@ds159489.mlab.com:59489/jobsdb");

var db =mongoose.connection;
db.on("error",function(){
	console.log("connection error");
});
db.once("open",function() {
	console.log("connection success");	
});

