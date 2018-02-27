/**
*Load module dependecies
*/
var debug    = require('debug');
var moment   = require('moment');
var mongoose = require('mongoose');
var _        = require('lodash');//lodash can also do the same.check?
var expressValidator = require('express-validator');

var UserProfile  = require('../models/user_profile');

var UserProfileDal   = require('../dal/user_profile');
var handleError  = require('../lib/utils').handleError;
var errorHandler = require('../lib/utils').errorHandler;
var logMsg       = require('../lib/utils').showMsg;

//private members
function _validateUserProfileInput(req, res,next){
  //think over the requirement of the following validation
  //for user profile info creation
  req.checkBody('username','username is required').notEmpty();
  req.checkBody('firstName','firstName is required').notEmpty();
  req.checkBody('lastName','lastName is required').notEmpty();
  req.checkBody('address','address is required').notEmpty();
  // req.checkBody('address.subcity','subcity is required').notEmpty();
  // req.checkBody('woreda','woreda is required').notEmpty();
  // req.checkBody('kebele','kebele is required').notEmpty();
  // req.checkBody('St','St is required').notEmpty();

    var errors = req.validationErrors();
    if(errors){
      console.log("errors",errors);
     return res.status(400).json(errors);
     }
   }
/**
*1. create new userProfile
*/

function createUserProfile(req, res, next){
        _validateUserProfileInput(req, res, next);
        var body = req.body;
            body.userId = req.user._id;
            body.subcity=body.address.subcity;
            body.wored=body.address.woreda;
            body.kebele=body.address.kebele;
            body.st=body.address.st;

        //pick only the required attributes from the body
        var body = _.pick(req.body,["address","username","firstName","lastName","userId","subcity","kebele","St"]);
        //console.log("body",body);
                  //  create if fare doesn't exists from to userProfile
             UserProfileDal.create(body)
                           .then((retrievedUserProfile)=> {
                             console.log("userProfile : ",retrievedUserProfile)
                                if(retrievedUserProfile==400) return res.status(400).send({"message":body.username +" already exists"});
                                return res.status(201).json(retrievedUserProfile);//userProfile created succesfully
                           }, function(err){
                             res.send(err)
                           })
}
/**
*2. Find all list of userProfiles controller
*/
function findAllUserProfile(req, res, next){
  var allUserProfiles={};
  UserProfileDal.findAll(allUserProfiles)
          .then((userProfiles) => {
            //if(error) return res.status(500).send({"ERROR": "Unable to fecth userProfile document!"})
            if(!userProfiles) return res.status(404).json({"ERROR": "NO userProfile FOUND"});
            return res.json(userProfiles);
          }, function(error){
            res.status(500).send({"ERROR": "Unable to fecth userProfile document!"})
          })
   }

 /**
 *3. Search userProfile by query instead of req.body
 */
  function searchProfileByUserName  (req, res, next){
     var username = req.params.username;

     UserProfileDal.searchByName(username)
               .then( function(userProfile){
                    if(userProfile===404) return  res.status(404).json({"message":"No muching userProfile found"});
                   res.status(200).json(userProfile);
               },function(err){
                 res.status(500).send({"Error":"Unable to find userProfile"})
               })
 }
/**
*4. Find userProfile by their ID controller
*/
function findUserProfileById(req, res){
  debug('GETTING USERPROFILE BY ID:');
  var userProfileId=req.params.id;
  //chech if userProfile ObjectId is valid or not
  var validObjectId=mongoose.Types.ObjectId.isValid(userProfileId);

  if(validObjectId){
    UserProfileDal.findById(userProfileId)
            .then(userProfile => {
              if(userProfile===404) return res.status(404).send({"message":"No muching userProfile found"});
               res.json(userProfile);
            },function(err){
              res.status(500).sendStatus(err);
            })

      } else{
        res.status(400).send({"message":"UserProfile Id is not valid"});
      }
   }

function getUserProfileByCustomId(req,res){
       debug('GETTIGN STATION')
       var customid = req.params.cid;
       //console.log("my userProfile id : " + customid);

 UserProfileDal.findByCustomId(customid)
           .then((userProfile) => {
               if(userProfile===404) return res.status(404).send({"message":"No muching userProfile found"});
               console.log(userProfile)
               res.status(200).send(userProfile);
           },function(err){
             res.status(500).send({"message":"unable to find userProfile"});
           });
   }
/**
*5. Update userProfile Info Controller
*/
function updateUserProfileInfo(req,res){
  var modifiedAt = new Date();
  req.body.modifiedAt=modifiedAt;
  var userProfileData= _.pick(req.body,["name","userProfileId","latitude","longitude","route","modifiedAt"]);
  console.log("userProfileData", userProfileData)

  var address ={};
     address.subcity=req.body.address.subcity;
     address.kebele=req.body.address.kebele;
     address.woreda=req.body.address.woreda;
     address.st=req.body.address.st;

  var updates ={
    name:req.body.name,
    userId    :req.body.userId,
    firstName :req.body.firstName,
    lastName  :req.body.lastName,
    address     :address,
    modifiedAt:req.body.modifiedAt};

  var query         = {_id:req.params.id};
  var setUpdates    = {$set: updates };
  var updateOptions = {new: true};

  UserProfileDal.update(query,setUpdates,updateOptions)
         .then(updateduserProfile => {
           //no content found
           if(!updateduserProfile)
           //use 204 instead of 404 for update operation if the document to be updates
           //didn't exist
           return res.status(404).send({"Message": "No content found to update"});

           res.send(updateduserProfile);
         }, function(err){
           res.status(500).json(e);
         })
}
/**
*6. Delete userProfile Controller
*/
function deleteUserProfileById(req,res){
  var query= {_id:req.params.id};
  UserProfileDal.delete(query)
         .then(userProfile => {
           if(userProfile===404) return res.status(404).send({"message":"Content already removed"});
           return res.send({"message":"succesfully removed",userProfile});
         }, err=>{
           res.status(404).send({"error":e});
         })

}
/**
*7. Get collection paginate//refactor this code//use promises instead of caalbacks
*/
function findUserProfileByPagination (req, res, next){
    debug('GET STATION COLLECTION BY PAGINATION');

    var query = req.query.query || {};
    var qs = req.query;

    UserProfileDal.paginate(query, qs)
              .then(function(docs){
                  if(docs) return res.json(docs);
              })
              .catch(err=>{
                  customError.type = 'GET_STATIONs_PAGINATE_ERROR';
                  //return handleError(res, err, errorObj);
                  return errorHandler(res, customError);
              });
}

/**
*II. Export userProfile Controllers
*/
module.exports = {
    create    : createUserProfile,
    findAll   : findAllUserProfile,
    findById  : findUserProfileById,
    update    : updateUserProfileInfo,
    delete    : deleteUserProfileById,
    paginate  : findUserProfileByPagination,
    //findByName: findUserProfileByName,
    findByCustomId:getUserProfileByCustomId,
    searchByUsername : searchProfileByUserName
}
