/**
*Load third party module dependecies
*/
const _         = require('lodash');
const jwt       = require('jsonwebtoken');
const bcrypt    = require('bcrypt');
const expressValidator= require('express-validator');
;
/**
*Load local module dependecies
*/
const config    = require('../config/config');
const UserDal   = require('../dal/user');
const UserModel = require('../models/user')
const handleServerError = require('../lib/utils').handleError;

/**
*1. create/register/signup new user
*/
function create_user(req, res) {
  //validate user input
  req.checkBody('email','Email you entered is invalid. Please try again').isEmail().trim();
  req.checkBody('confirmPassword','password is required').matches();
  req.checkBody('password', 'Password doesn\'t match').equals(req.body.confirmPassword);

  var errors = req.validationErrors();
  if(errors){
   console.log(errors);
   return res.status(500).json({'validation-errors':errors});
   }
      //take only the required field from req.body object
      //use array and destract method to make the following code
      var newUserData = _.pick(req.body,["email","password","phone"]);
  //before creating user check user if it exists
    UserDal.findUserByEmail(newUserData.email)
           .then(user => {
             if(!user){
                //create user
                UserDal.create(newUserData)
                       .then(result => {
                         //destruct result array into token and user object
                         let [token, user] =result;
                         //test first whether token exists or not
                         //if(token)  res.header('x-auth')
                         res.header('x-auth',token).send(user);
                       })
                       .catch(e => {
                         res.status(400).send(e);
                       });
                       //});
             }
             else{
               //user already exists
               //console.log("error: "+ newUser.email + " already exists");
               return res.status(400).json({message:newUserData.email+" already exists"});
             }
           })
           .catch(e => {
             console.log(e);
             return res.status(500).json({message:"SERVER ERROR"});
           })
}

/**
*2. user login controller
*/
function user_login(req, res) {
  req.checkBody('email','Email you entered is invalid. Please try again').isEmail().trim();
  req.checkBody('password','password is required').notEmpty();

  var userData = _.pick(req.body, ['email', 'password']);
  UserDal.login(userData)
          .then(result => {
            //destruct result into token and user object
            if(!result)   res.status(400).json({"ERROR":"ACCESS FORBID"});
            let [token,user] =result;
            res.header('x-auth', token).send(user);
          })
          .catch(e => {
              res.status(400).json({"MESSAGE":"ACCESS FORBID",
            "ERROR":e});
          });

}
/**
*3. Find all list of users controller
*/
function findAllUser(req, res){
  var allUsers={};
  UserDal.findAll(allUsers)
          .then(users => {
            if(!users) return res.status(404).json({"ERROR": "NO USER FOUND"});
            return res.json(users);
          })
          .catch(e => {
              return res.status(500).json(e);
          });
   }
/**
*4. Find user by their ID controller
*/
function findUserById(req, res){
  console.log('Getting user by id:');
  var userId=req.params.userId;
  UserDal.findById(userId)
          .then(user => {
            if(!user) return res.status(404).json({"ERROR": "NO USER FOUND"});
            console.log("user",user)
            return res.json(user);
          })
          .catch(e => {
              return res.status(500).json(e);
          });
   }
/**
*5. Update User Info Controller
*/
function updateUserInfo(req,res){
  var modifiedAt = new Date();
  req.body.modifiedAt=modifiedAt;
  var setUpdates= _.pick(req.body,["email","password","phone","modifiedAt"]);
  var query ={_id:req.params.userId};
  var updateOpts =  {$set: setUpdates };
  //try to debug server error problem when your create
  UserDal.update(query,updateOpts)
         .then(updatedUser => {
           if(!updatedUser) return res.status(400).json({"ERROR": "UNABLE TO UPDATE USER INFO"});
           console.log("user",updatedUser)
           return res.status(201).json(updatedUser);
         })
         .catch(e => {
             return res.status(500).json(e);
         });
}
/**
*6. Delete User Controller
*/
function deleteUserById(req,res){
  var query= {_id:req.params.userId};
  UserDal.delete(query)
         .then(user => {
           if(!user) return res.send("No content found");
           return res.send(user);
         })
         .catch(e => {console.log(e);
         res.status(404).send({"error":e});});

} 
/**
*II. Export User Controllers
*/
module.exports = {
    create    : create_user,
    findAll   : findAllUser,
    findById  : findUserById,
    update    : updateUserInfo,
    delete    : deleteUserById,
    login : user_login
}
