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
*2. Find all list of users controller
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
*3. Find user by their ID controller
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
*4. Update User Info Controller
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
*5. Delete User Controller
*/
function deleteUserById(req,res){
  var UserId=req.params.userId;
  UserModel.findOneAndRemove({_id:UserId},
         function(err, retrievedUser){
          if(err)  res.send('Error Deleteing');
           else  {res.send("No content found");
           //res.json(retrievedUser);
         }
         });

}
/**
*6. User Login Controller
*/
function loginUser(req,res){
  var body = _.pick(req.body, "email","password","username");
   var userD=body;
if (userD.email && userD.password) {
     UserModel.authenticate(userD.email, userD.password, function (error, user) {
       console.log({error, user:user});
       if (error) {
         var err ={};
          err.message='WRONG EMAIL OR PASSWORD.';
          err.status  = error;
         return res.status(401).json({"ERROR":"AUTHENTICATION FAILED",
          "ACTUAL ERROR":err});
       }
       if (!user) {
           err.message='User not found';
          return res.status(401).json({"error":"AUTHENTICATION FAILED",
        error:err});
        }
         //req.session.userId = user._id;
         //return res.redirect('/profile');
         return res.json({"message": "Hello "+user.firstName+ " "+
         user.lastName + ". WELCOME TO AA LRT ONLINE TICKETING SYSTEM!",
       "user":_.pick(user,"email","username","firstName","lastName")});

     });
} else {
 var err = {};
 err.status = 400;//bad request status code
 err.message='Bad Request.All fields are required.';
 //return next(err);
 return res.status(400).json({"error":err});//bad request
}

}

/**________________________________
* User Login Controller ??? take some part of the code into your new code
*__________________________________*/
function userLogin(req, res) {
    var email    = req.body.email;
    var password = req.body.password;

UserModel.findOne({email:email}).exec()
        .then(userFound => {
              if(!userFound) return res.status(400).json({"message": "No user found"});

               bcrypt.compare(password, userFound.password)
                     .then(function(result) {
                       if(!result) return res.status(400).json({"message": "Incorrect Password"});
                       console.log("result:", result);
                       if(result){
                         //TODO: add jwt features like expire time,...
                         //sign a token with 1 hour of expiration time
                         var token ="JWT " + jwt.sign({ username: userFound.username,
                         exp: Math.floor(Date.now() / 1000) + (60 * 60)}, config.SECRET)

                       return res.header("Auth",token).status(201).json( {"message":`Hello ${userFound.username}. Welcome to our website`,
                       user: userFound,token: token})}
                       })
                     .catch(err => {console.log(err)});

         })
        .catch(err => {console.log(err)});
}
/**
*II. Find user using their token value instead of plain old text
*/
function findUserByToken(){
  return new Promise(function(resolve, reject){
    try{
      var decodedJWT =jwt.verify(token, config.SECRET);
      var bytes = cryptojs.AES.decrypt(decodedJWT,config.SECRET);
      var tokenData = JSON.parse(bytes.toString(cryptojs.enc.utf8));
      userModel.findById(tokenData._id)
               .then(function(user){
                 if(user){
                   resolve(user);
                 }
                 else{
                   reject();
                 }
               },
             function(e){
               reject();
             })
    }catch(e){
      reject();
    }
  }

  );
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
