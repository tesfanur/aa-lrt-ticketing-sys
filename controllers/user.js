/**
 *Load third party module dependecies
 */
const _ = require('lodash');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const moment = require("moment");
const debug = require('debug')('api:User-Controller');
/**
 *Load local module dependecies
 */
const config = require('../config/config');
const UserDal = require('../dal/user');
const UserModel = require('../models/user')
const utils = require('../lib/utils');

/****/
var handleResponse = (res, status = 200, doc) => {
  if (!doc || doc === 404) return res.status(status).send({
    "message": "User Not Found."
  });
  res.status(status).json(doc);
}
/**
 *Handle user responses
 **/
function handleUserResponse(res, method, doc) {
  if (!doc || doc === 404) return handleResponse(res, 404, doc);
  if (method === "POST") return handleResponse(res, 201, doc);
  return handleResponse(res, 200, doc);
}

/**
 *1. create/register/signup new user
 */
function create_user(req, res, next) {
  //validate user input
  //user email is optional
  //req.checkBody('email', 'Email you entered is invalid. Please try again').isEmail().trim();
  req.checkBody('username', 'username is required').notEmpty();
  req.checkBody('phone', 'phone is required').notEmpty();
  //req.checkBody('confirmPassword', 'password is required').matches();
  //req.checkBody('password', 'Password doesn\'t match').equals(req.body.confirmPassword);
  req.checkBody('password', 'Password is required').notEmpty();


  var errors = req.validationErrors();
  if (errors) {
    console.log(errors);
    return res.status(400).json({
      "query_result": "Incomplete Credentials",
      'validation-errors': errors
    });
  }
  var body = _.pick(req.body, ["username", "password", "phone", "email", "userType"]);
  //var query =_.pick(req.query,["username","password","phone","email"]);
  //console.log(query);
  //take only the required field from req.body object
  //use array and destract method to make the following code
  // var body = _.pick(req.body, ["email", "password", "phone","username"]);
  var userData = body;
  //CONVERT BOTH USERNAME & PASSWORD TO LOWERCASE BEFORE LOGIN 
  if (userData.username) userData.username = userData.username.toLowerCase();
  if (userData.email) userData.email = userData.email.toLowerCase();

  //before creating user check user if it exists
  //findByCredentials
  var username = userData.username || "";
  var email = userData.email || "";
  var phone = userData.phone || "";
  var validPhone = function (v) {
    return /^\+[0-9]{12,13}$/.test(v);
  }
  if (!validPhone(phone) && phone !== "") {
    return res.status(400).json({
      'query_result': phone + " phone is not valid"
    });
  }
  if (username.length <= 4) {
    return res.status(400).json({
      'query_result': username + " is invalid username. It should be at least five character long"
    });
  }
  console.log("phone", phone);
  if (phone) {
    UserDal.findByPhone(phone)
      .then(user => {
        if (user) {
          res.status(400).send({
            "query_result": phone + " already exist",
            "user": user
          });
        } else {
          UserDal.findByUsername(username)
            .then(userResult => {
              if (userResult) {
                return res.status(400).send({
                  "query_result": username + " already exist",
                  "user": userResult
                });
              } else {
                //=====
                //taken from here: code ref
                //=====                  
                var userID = userData.username || userData.email || userData.phone;
                console.log("userID", userID);
                UserDal.findUserByUserID(userID)
                  //UserModel.findByCredentials(userData)
                  .then(user => {
                    console.log("user from user create controller", user);
                    console.log("!user", !user);
                    console.log("user==null", user == null);
                    if (user == null) {
                      //create user
                      UserDal.create(userData)
                        .then(result => {
                          //destruct result array into token and user object
                          let [token, user] = result;
                          //test first whether token exists or not
                          //if(token)  res.header('x-auth')
                          //res.status(201);
                          function formatDate(date) {
                            return moment(date).format("YYYY-MM-DD hh:mm:ss A")
                          }
                          if (user) {
                            user = {
                              username: user.username || "",
                              email: user.email || "",
                              phone: user.phone || "",
                              createdDate: formatDate(user.createdAt),
                              modifiedDate: formatDate(user.modifiedAt)

                            }
                            res.status(201).header('x-auth', token).send({
                              query_result: "success",
                              user: user
                            });
                          }

                        })
                        .catch(e => {
                          res.status(400).send(e);
                        });
                      //});
                    } else {
                      //user already exists
                      //console.log("error: "+ newUser.email + " already exists");
                      return res.status(400).json({
                        query_result: userID + " already in use."
                      });
                    }
                  })
                  .catch(e => next(e))

              }
            }).catch(error => next(error));
        }
      })
      .catch(error => next(error));
    return;
  }

  //=====
  //taken from here: code ref
  //=====
}

/**
 *2. user login controller
 */
function user_login(req, res, next) {
  //req.checkBody('email', 'Email you entered is invalid. Please try again').isEmail().trim();
  req.checkBody('password', 'password is required').notEmpty();

  var errors = req.validationErrors();
  if (errors) {
    console.log(errors);
    return res.status(400).json({
      'validation-errors': errors
    });
  }

  var user = req.body;
  //CONVERT BOTH USERNAME & PASSWORD TO LOWERCASE BEFORE LOGIN
  if (user.username) user.username = user.username.toLowerCase();
  if (user.email) user.email = user.email.toLowerCase();

  var userData = _.pick(user, ['email', 'username', 'phone', 'password']);

  UserDal.login(userData)
    .then(result => {
      console.log("result", result)
      var query_result = "Username or password is incorrect!";

      //destruct result into token and user object
      if (!result || result === 403) return res.status(403).json({
        query_result
      });
      let [token, user] = result;
      console.log("token", token)
      if (token) {
        return res.header('Authorization', token).send({
          "query_result": "Successfully login.",
          user,
          token
        });
      }
      return res.status(403).json({
        query_result
      });

    })
    .catch(error => {
      error = JSON.parse(JSON.stringify(error))
      if (error.query_result) return res.status(403).json(error);


      next(error)
    });

}
/**
 *3. Find all list of users controller
 */
function findAllUser(req, res, next) {
  // if(!users) return res.status(404).json({"ERROR": "NO USER FOUND"});
  // return res.json(users);
  var allUsers = {};
  UserDal.findAll(allUsers)
    .then(users => handleUserResponse(res, req.method, users)) //refactor handleUserResponse
    .catch(error => next(error));
}
/**
 *4. Find user by their ID controller
 */
function findUserById(req, res) {
  console.log('Getting user by id:');
  var userId = req.params.userId;
  //chech if User ObjectId is valid or not
  var validObjectId = mongoose.Types.ObjectId.isValid(userId);
  if (validObjectId) {
    UserDal.findById(userId)
      .then(user => handleUserResponse(res, req.method, user))
      .catch(error => next(error));
  } else {
    res.status(400).send({
      "message": "User Id is not valid"
    });
  }


}
/**
 *5. Find user by their username controller
 */
function findByUsername(req, res, next) {
  console.log('Getting user by id:');
  var username = req.params.username;
  //chech if User ObjectId is valid or not
  var validObjectId = req.params.username != "";
  if (validObjectId) {
    UserDal.findByUsername(username)
      .then(user => handleUserResponse(res, req.method, user))
      .catch(error => next(error));
  } else {
    res.status(400).send({
      "message": "Username required"
    });
  }


}

/**
 *5. Find user by their username controller
 */
function findByUserPhoneNumber(req, res, next) {
  console.log('Getting user by phone Number:');
  var phone = req.params.phone || req.body.phone;
  //chech if User ObjectId is valid or not
  var validObjectId = req.params.phone != "";
  if (phone) {
    UserDal.findByPhone(phone)
      .then(user => handleUserResponse(res, req.method, user))
      .catch(error => next(error));
  } else {
    res.status(400).send({
      "query_result": "Phone required"
    });
  }


}

/**
 *5. Update User Info Controller
 */
function updateUserInfo(req, res) {
  var modifiedAt = new Date();
  req.body.modifiedAt = modifiedAt;
  var setUpdates = _.pick(req.body, ["email", "username", "password",
    "phone", "userType", "modifiedAt"
  ]);
  var updates = {
    username: setUpdates.username,
    email: setUpdates.email,
    phone: setUpdates.phone,
    userType: setUpdates.userType
  }
  var query = {
    _id: req.params.userId
  };
  var updateOpts = {
    $set: updates
  };
  //try to debug server error problem when your create
  UserDal.update(query, updateOpts)
    .then(updatedUser => {
      if (!updatedUser) return res.status(400).json({
        "ERROR": "UNABLE TO UPDATE USER INFO"
      });
      console.log("user", updatedUser)
      return res.status(201).json(updatedUser);
    })
    .catch(e => {
      return res.status(500).json(e);
    });
}
/**
 *6. Delete User Controller
 */
function deleteUserById(req, res, next) {
  var userId = req.params.userId;
  //chech if User ObjectId is valid or not
  var validObjectId = mongoose.Types.ObjectId.isValid(userId);
  if (validObjectId) {
    var query = {
      _id: userId
    };
    UserDal.delete(query)
      .then(user => {
        if (!user) return res.send("No content found");
        return res.send(user);
      })
      .catch(e => {
        console.log(e);
        res.status(404).send({
          "error": e
        });
      });
  } else {
    res.status(400).send({
      "message": "User Id is not valid"
    });
  }


}

function logoutUser(req, res, next) {
  const user = req.user;
  const auth_token = req.token;

  user.removeToken(auth_token)
    .then(() => {
      res.status(204).send({
        message: "LOGGED OUT"
      })
    })
    .catch((err) => {
      res.send(400).send();
    });
}
/**
 *Ge user collection by pagination
 **/
function getUserByPagination(req, res, next) {
  debug('GET FAQ COLLECTION BY PAGINATION');
  var query = req.query.query || {}; //default query: find all
  var queryParams = req.query;
  var method = req.method;

  UserDal.paginate(query, queryParams)
    .then(docs => handleUserResponse(res, method, docs))
    .catch(error => next(error));
}
/**
 *II. Export User Controllers
 */
module.exports = {
  create: create_user,
  findAll: findAllUser,
  findById: findUserById,
  findByUsername: findByUsername,
  findByPhone: findByUserPhoneNumber,
  paginate: getUserByPagination,
  update: updateUserInfo,
  delete: deleteUserById,
  login: user_login,
  logout: logoutUser
}