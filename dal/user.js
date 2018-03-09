/**
 *Load module dependencies
 */
var q = require('q');
'use strict';
var UserModel = require('../models/user');

var debug = require('debug')('api:User-dal');
var config = require('../config/config')

var UserDalModule = (function(UserModel) {

  /**
   *1. create user dal
   */
  function createNewUser(userData) {
    debug('CREATING USER COLLECTION');
    console.log("userData from create user controller",userData);
    var user = new UserModel(userData);
    var defferd = q.defer();

    user.save().then(() => {
      return user.generateAuthToken();
    }).then((token) => {
      if (!token) return defferd.reject();
      var result = [token, user];
      defferd.resolve(result);
    })
    return defferd.promise;

  }
  /**
   *2. Get all Users
   */
  function getAllUsers(query) {
    debug('GETTING ALL USER DOCUMENTS');
    var defferd = q.defer();
    //null here refers to get all user or don't use limit value
    UserModel.find(query)
      //.populate('userId',"firstName lastName username")
      .sort({
        createdAt: -1
      }) //sort by descending order latest on the top
      .exec((err, users) => {
        if (err) return defferd.reject(err);
        return defferd.resolve(users);
      })
    return defferd.promise;
  }
  /**
   *3.Get User by Id
   */
  function getUserById(userId) {
    debug('GETTING USER BY ID');
    var defferd = q.defer();
    UserModel.findOne({
        _id: userId
      })
      //.populate('userId',"firstName lastName username profileImage")
      .exec((err, user) => {
        if (err) return defferd.reject(err);
        return defferd.resolve(user);
      })
    return defferd.promise;
  }
  /**
   *4.FIND USER BY EMAIL
   */
  function findUserByEmail(email) {
    debug('GETTING USER BY EMAIL');
    var defferd = q.defer();
    UserModel.findOne({
        email: email
      })
      //.populate('userId',"firstName lastName username profileImage")
      .exec((err, user) => {
        if (err) return defferd.reject(err);
        return defferd.resolve(user);
      })
    return defferd.promise;
  }
  function findUserByUsername(username) {
    debug('GETTING USER BY USERNAME');
    var defferd = q.defer();
    UserModel.findOne({
        username: username
      })
      //.populate('userId',"firstName lastName username profileImage")
      .exec((err, user) => {
        if (err) return defferd.reject(err);
        return defferd.resolve(user);
      })
    return defferd.promise;
  }
  function findUserByUserID(userId) {
    debug('GETTING USER BY userid');
    var defferd = q.defer();
    UserModel.findOne({
       $or:[ {username: userId},
        {email: userId},
        {phone: userId}]
      })
      //.populate('userId',"firstName lastName username profileImage")
      .exec((err, user) => {
        if (err) return defferd.reject(err);
        return defferd.resolve(user);
      })
    return defferd.promise;
  }
  /**
   *5. Update User
   */
  function updateUser(query, setUpdates) {
    debug('UPDATING A USER', query);
    var defferd = q.defer();
    var opts = {
      'new': true //return updated user info
    };
    UserModel.findOneAndUpdate(query, setUpdates, opts)
      .exec()
      .then(function(err, updatedUser) {
        if (err) return defferd.reject(err);
        return defferd.resolve(updatedUser);
      });
    return defferd.promise;
  }
  /**
   *6. Remove User
   */
  function deleteUser(query) {
    debug('DELETING USER');
    var defferd = q.defer();
    UserModel.findOneAndRemove(query)
      .then(function(err, user) {
        if (err) return defferd.reject(err);
        if (user) return defferd.resolve(user);
        defferd.reject("User not found")
      });
    return defferd.promise;

  }
  /**
   *7. Get User by pagination
   */
  function getUserByPagination(query, qs, cb) {
    debug('fetching a collection of Users');

    var opts = {
      sort: qs.sort || {},
      page: qs.page || 1,
      limit: qs.per_page || 10
    };

    UserModel.paginate(query, opts, function(err, data) {
      if (err) return cb(err, null);

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

  function userLogin(userData) {
    console.log("userData from userLogin dal",userData)
    var email =userData.email || "";
    var username =userData.username || "";
    var phone =userData.phone || "";
    var password =userData.password || "";
    var userID =userData.email || userData.username || userData.phone;
    console.log("userID: ",userID);
    console.log("userData: ",userData);

    return new Promise((resolve, reject) => {

      UserModel.findByCredentials(userID, password)
        .then((user) => {
          console.log("user from dal", user)
          if (!user || user === 404) return resolve(403);
          return user.generateAuthToken()
            .then((token) => {
              var result = [token, user];
              // result[0]=token;
              // result[1]=user;
              console.log("token", token)
              if (!token) {
                console.log("token", "no token")
                return resolve(token);
              }

              resolve(result);
            });
        }).catch(error => reject(error));

    });
  }
  /**
   * return UserDalModule public APIs
   */
  return {
    create: createNewUser,
    login: userLogin,
    findAll: getAllUsers,
    findById: getUserById,
    update: updateUser,
    delete: deleteUser,
    findUserByEmail: findUserByEmail,
    findUserByUsername:findUserByUsername,
    findUserByUserID:findUserByUserID,
    paginate: getUserByPagination
  };
}(UserModel));
/**
 * export UserDalModule
 */
module.exports = UserDalModule;
