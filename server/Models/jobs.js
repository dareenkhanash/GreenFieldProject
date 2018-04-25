var mongoose = require('mongoose');


////Jobs Schema
var jobsSchema = mongoose.Schema({
  user: 
  {
    type: String,
  },
  jobTitle: {
    type: String,
    require:true
  },
  jobDescription: String,
  category: {
    type: String,
    require:true
  },
  from: String,
  to: String,
  dateTo:Date,
  dateFrom:Date,
  created_at: 
  {
    type:Date,
    default:Date.now
  }
});


/////Jobs Model
var Jobs = mongoose.model('Jobs', jobsSchema);

var createJob = function(data, callback){
  Jobs.create(data, callback)
};

// i think we don't need to pass data because 
// it's gonna retrive all the jobs n the schema 
// idk though
var allJobs = function (callback){
  Jobs.find({}).exec(function(err, data){
    if(err){
      callback(err, null)
    } else {
    callback(null, data)}
  });
};

var jobByTitle = function (jobTitle, callback){
  Jobs.findOne({jobTitle: jobTitle}, function(err, data){
    if(err){
      callback(err, null)
    } else {
    callback(null, data)
  }
  });
};
var findSome=function(title, callback){

var regexValue='\.*'+title+'\.';
  Jobs.find({"jobTitle":new RegExp(regexValue, 'i')}, function(err, data){
     if(err){
      callback(err, null)
    } else {
    callback(null, data)
  }
  });
};
var jobByUserName=function(userName,callback){
  
  Jobs.find(userName).exec(function(err, data){
     if(err){
      callback(err,null)
    } else {

    callback(null,data)}
  });
};

var jobsByCategory = function(category, callback){
  Jobs.find({category: category}, function(err, data){
      if(err){
      callback(err, null)
    } else {
    callback(null, data)
  }
  });
};

var jobsByStartTime = function(from, callback){
  Jobs.find({from: from}, function(err, data){
    if(err){
      callback(err, null)
    } else {
    callback(null, data)
  }
  });
};

var jobsByEndTime = function(to, callback){
  Jobs.find({to: to}, function(err, data){
    if(err){
      callback(err, null)
    } else {
    callback(null, data)
  }
  });
};

var updateJobs = function(jobTitle, updatedData, callback){
  Jobs.findOneAndUpdate({jobTitle: jobTitle},  { $set: updatedData}, callback)
};

var deleteJob = function(jobTitle, callback){
  Jobs.deleteOne({jobTitle: jobTitle}, callback)
}


// Exporting the Model and the functions
module.exports.Jobs = Jobs;
module.exports.createJob = createJob;
module.exports.allJobs = allJobs;
module.exports.jobByTitle = jobByTitle;
module.exports.jobsByCategory = jobsByCategory;
module.exports.jobByUserName = jobByUserName;
module.exports.jobsByStartTime = jobsByStartTime;
module.exports.jobsByEndTime = jobsByEndTime;
module.exports.updateJobs = updateJobs;
module.exports.deleteJob = deleteJob;
module.exports.findSome = findSome;