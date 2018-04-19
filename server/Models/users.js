var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
////User Schema
var usersSchema = mongoose.Schema({
  userName: {
    type:String,
    unique:true,
    trim: true
  },
  name:String,
  password: String,
  gender:String,
  phoneNumber:Number,
  Address:String,
  Age:Number,
  Nationality:String

});
//User Model
var Users = mongoose.model('Users', usersSchema);
var createUsers=function(data,callback){
  Users.create(data,callback);
}
var getUser=function(userName,callback){
  var query  = Users.where({ userName: userName });
  query.findOne(callback);
}
var updateUsers=function(userName,updatedData,callback){
  Users.findOneAndUpdate({userName:userName},  { $set: updatedData}, callback)
}
var deleteUser=function(userName,callback){
  Users.deleteOne({userName:userName}, callback)
}
module.exports.Users=Users
module.exports.createUsers=createUsers
module.exports.updateUsers=updateUsers
module.exports.deleteUser=deleteUser
module.exports.getUser=getUser