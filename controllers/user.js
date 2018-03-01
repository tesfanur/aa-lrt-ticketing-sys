/**
*Load third party module dependecies
*/
const _         = require('lodash');
const bcrypt    = require('bcrypt');
const mongoose  = require('mongoose');
const jwt       = require('jsonwebtoken');
/**
*Load local module dependecies
*/
const config    = require('../config/config');
const UserDal   = require('../dal/user');
const UserModel = require('../models/user')
const utils     = require('../lib/utils');

/****/
var handleResponse=(res,status=200,doc)=>{
    if(!doc || doc===404) return res.status(status).send({"message":"User Not Found."});
     res.status(status).json(doc);
}
/**
*Handle user responses
**/
  function handleUserResponse(res,method, doc){
    if(!doc || doc===404) return handleResponse(res,404,doc);
     if(method==="POST") return handleResponse(res,201,doc);
     return handleResponse(res,200,doc);
  }

/**
*1. create/register/signup new user
*/
function create_user(req, res,next) {
  //validate user input
  req.checkBody('email','Email you entered is invalid. Please try again').isEmail().trim();
  req.checkBody('confirmPassword','password is required').matches();
  req.checkBody('password', 'Password doesn\'t match').equals(req.body.confirmPassword);

  var errors = req.validationErrors();
  if(errors){
   console.log(errors);
   return res.status(400).json({'validation-errors':errors});
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
                         //res.status(201);
                         res.status(201).header('x-auth',token).send(user);
                       })
                       .catch(e => {
                         res.status(400).send(e);
                       });
                       //});
             }
             else{
               //user already exists
               //console.log("error: "+ newUser.email + " already exists");
               return res.status(400).json({message:newUserData.email+" already in use."});
             }
           })
           .catch(e =>  next(e))
}

/**
*2. user login controller
*/
function user_login(req, res,next) {
  req.checkBody('email','Email you entered is invalid. Please try again').isEmail().trim();
  req.checkBody('password','password is required').notEmpty();

    var errors = req.validationErrors();
    if(errors){
     console.log(errors);
     return res.status(400).json({'validation-errors':errors});
     }

  var userData = _.pick(req.body, ['email', 'password']);
  /**
  *TODO: REFACTOR USER LOGIN DAL SO THAT IT HANDLES
  *      ALL POSSIBLE AUTHENTICATION VIOLATIONS
  */
  UserDal.login(userData)
          .then(result => {
            console.log("result", result)
            //destruct result into token and user object
            if(!result || result ===403)   return res.status(403).json({"ERROR":"ACCESS FORBID"});
            let [token,user] =result;
            res.header('x-auth', token).send({"message":"Succesfully login.",user});
          })
          .catch(error =>next(error));

}
/**
*3. Find all list of users controller
*/
function findAllUser(req, res, next){
    // if(!users) return res.status(404).json({"ERROR": "NO USER FOUND"});
    // return res.json(users);
  var allUsers={};
  UserDal.findAll(allUsers)
          .then(users =>handleUserResponse(res,req.method,users))//refactor handleUserResponse
          .catch(error =>next(error));
   }
/**
*4. Find user by their ID controller
*/
function findUserById(req, res){
  console.log('Getting user by id:');
  var userId=req.params.userId;
  //chech if User ObjectId is valid or not
  var validObjectId=mongoose.Types.ObjectId.isValid(userId);
  if(validObjectId){
    UserDal.findById(userId)
            .then(user => handleUserResponse(res,req.method,user))
            .catch(error=>next(error));
  }else{
     res.status(400).send({"message":"User Id is not valid"});
   }


   }
/**
*5. Update User Info Controller
*/
function updateUserInfo(req,res){
  var modifiedAt = new Date();
  req.body.modifiedAt=modifiedAt;
  var setUpdates= _.pick(req.body,["email","password","phone","userType","modifiedAt"]);
  var updates ={email:setUpdates.email,
                phone:setUpdates.phone,
                userType:setUpdates.userType
              }
  var query ={_id:req.params.userId};
  var updateOpts =  {$set: updates };
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
  var userId=req.params.userId;
  //chech if User ObjectId is valid or not
  var validObjectId=mongoose.Types.ObjectId.isValid(userId);
  if(validObjectId){
    var query= {_id:userId};
    UserDal.delete(query)
           .then(user => {
             if(!user) return res.send("No content found");
             return res.send(user);
           })
           .catch(e => {console.log(e);
           res.status(404).send({"error":e});});
  }  else{
     res.status(400).send({"message":"User Id is not valid"});
   }


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
