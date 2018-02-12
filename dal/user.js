/**
*Load module dependencies
*/
var q = require('q');
  'use strict';
var UserModel = require('../models/user');

var debug     = require('debug')('api:User-dal');
var config    = require('../config/config')

var UserDalModule = (function(UserModel){

/**
*1. create user dal
*/

function createNewUser(userData){
  debug('CREATING USER COLLECTION');
  var user = new UserModel(userData);
  var defferd = q.defer();

    user.save().then(() => {
      return user.generateAuthToken();
    }).then((token) => {
      var result =[];
      result[0]=token;
      result[1] =user;
      //console.log("user :",user);
      //res.header('x-auth', token).send(user);
      if(!token) return defferd.reject(err);
      defferd.resolve(result);
    })
    return defferd.promise;

}

/**
*2. Get all Users
*/
function getAllUsers(query){
    debug('GETTING ALL USER DOCUMENTS');
    var defferd =q.defer();
 UserModel.find(query)
        //.populate('userId',"firstName lastName username profileImage")
        .exec((err, users) => {
          if(err) return defferd.reject(err);
          return defferd.resolve(users);
        })
   return defferd.promise;
}
/**
*3.Get User by Id
*/
function getUserById(userId){
    debug('GETTING USER BY ID');
    var defferd =q.defer();
 UserModel.findOne({_id:userId})
        //.populate('userId',"firstName lastName username profileImage")
        .exec((err, user) => {
          if(err) return defferd.reject(err);
          return defferd.resolve(user);
        })
   return defferd.promise;
}
/**
*3.FIND USER BY EMAIL
*/
function findUserByEmail(email){
    debug('GETTING USER BY EMAIL');
    var defferd =q.defer();
 UserModel.findOne({email:email})
        //.populate('userId',"firstName lastName username profileImage")
        .exec((err, user) => {
          if(err) return defferd.reject(err);
          return defferd.resolve(user);
        })
   return defferd.promise;
}
/**
*4. Update User
*/
function updateUser(query, setUpdates){
    debug('UPDATING A USER', query);
    var defferd =q.defer();
    var opts = {
        'new': true//return updated user info
    };
 UserModel.findOneAndUpdate(query, setUpdates, opts)
        .exec()
        .then(function (err, updatedUser){
          if(err) return defferd.reject(err);
          return defferd.resolve(user);
        });
        return defferd.promise;
}
/**
*5. Remove User
*/
function deleteUser(query, cb){
    debug('deleting a User');
 UserModel.findOne(query)
        .exec()
        .then(function (User){
            if(!User) {
               res.status(404);
              return cb(null, {"message":"Not found"})}
              ////cb(null, User);

            UserModel.remove(function(err, data){
                if(err) return cb(err)
                cb(null, data);})
                ;})
         .catch(function (err){
                    return cb(err); });
}
//
/**
*6. Get User by pagination
*/
function getUserByPagination(query, qs, cb){
    debug('fetching a collection of Users');

    var opts = {
        sort: qs.sort || {},
        page: qs.page || 1,
        limit: qs.per_page || 10
    };

    UserModel.paginate(query, opts, function (err, data){
        if(err) return cb(err,null);

        var response = {
            page: data.page,
            total_docs: data.total,
            total_pages: data.pages,
            per_page: data.limit,
            docs: data.docs
        };

        cb(null, response);
    });
}
function userLogin (userData){
  var defferd = q.defer();
  UserModel.findByCredentials(userData.email, userData.password)
           .then((user) => {
            return user.generateAuthToken().then((token) => {
              var result =[token,user];
              // result[0]=token;
              // result[1]=user;
              defferd.resolve(result);
            });
          }).catch((e) => {
            defferd.reject(e);
  });
  return defferd.promise;
}
/**
* return UserDalModule public APIs
*/
  return {
  create : createNewUser,
  login : userLogin,
  findAll : getAllUsers,
  findById : getUserById,
  update : updateUser,
  delete : deleteUser,
  findUserByEmail:findUserByEmail,
  paginate : getUserByPagination
};
}(UserModel));
/**
* export UserDalModule
*/
module.exports= UserDalModule;
