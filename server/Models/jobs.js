var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

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
  from: Number,
  to: Number,
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

var allJobs = function (data, callback){
	Jobs.find({}, function(err, data){
		if (err){
			throw err
		}
		callback(data)
	});
};

var jobByTitle = function (jobTitle, callback){
  Jobs.findOne({jobTitle: jobTitle}, function(err, data){
    if(err){
      throw err
    }
    callback(data)
  });
};

var jobsByCatagory = function(category, callback){
	Jobs.findOne({category: category}, function(err, data){
    	if(err){
			throw err
		}
		callback(data)
	});
};

var jobsByStartTime = function(from, callback){
	Jobs.find({from: from}, function(err, data){
		if(err){
			throw err
		}
		callback(data)
	});
};

var jobsByEndTime = function(to, callback){
	Jobs.find({to: to}, function(err, data){
		if(err){
			throw err
		}
		callback(data)
	});
};

var updateJob = function(jobTitle, updatedData, callback){
	Jobs.findOneAndUpdate({jobTitle: jobTitle},  { $set: updatedData}, callback)
};


// Exporting the Model and the functions
module.exports.Jobs = Jobs;
module.exports.createJob = createJob;
module.exports.allJobs = allJobs;
module.exports.jobByTitle = jobByTitle;
module.exports.jobsByCatagory = jobsByCatagory;
module.exports.jobsByStartTime = jobsByStartTime;
module.exports.jobsByEndTime = jobsByEndTime;
module.exports.updateJob = updateJob;