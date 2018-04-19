var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
////Gobs Schema
var jobsSchema=mongoose.Schema({
  user:{type:String},
  jobTitle:String,
  jobDescription:String,
  category:String,
  startTime:String,
  endTime:String,
  created_at:{
    type:Date,
    default:Date.now
  }

})
/////Jobs Model
var Jobs = mongoose.model('Jobs', jobsSchema);
