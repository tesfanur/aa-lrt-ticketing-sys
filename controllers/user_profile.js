/**
 *Load module dependecies
 */
const debug = require('debug');
const moment = require('moment');
const mongoose = require('mongoose');
const _ = require('lodash'); //lodash can also do the same.check?
const expressValidator = require('express-validator');
const UserProfile = require('../models/user_profile');

const UserProfileDal = require('../dal/user_profile');
const handleError = require('../lib/utils').handleError;
const errorHandler = require('../lib/utils').errorHandler;
const logMsg = require('../lib/utils').showMsg;

//private members
function _validateUserProfileInput(req, res, next) {
  //think over the requirement of the following validation
  //for user profile info creation
  req.checkBody('username', 'username is required').notEmpty();
  req.checkBody('firstName', 'firstName is required').notEmpty();
  req.checkBody('lastName', 'lastName is required').notEmpty();
  req.checkBody('address', 'address is required').notEmpty();

  var errors = req.validationErrors();
  if (errors) {
    console.log("errors", errors);
    return res.status(400).json(errors);
  }
}
/**
 *1. create new userProfile
 */

function createUserProfile(req, res, next) {
  _validateUserProfileInput(req, res, next);
  var body = req.body;
  body.userId = req.user._id;
  body.username = body.username;
  body.subcity = body.address.subcity;
  body.wored = body.address.woreda;
  body.kebele = body.address.kebele;
  body.st = body.address.st;

  //pick only the required attributes from the body
  var body = _.pick(req.body, ["address", "username", "firstName", "lastName", "userId", "subcity", "kebele", "St"]);
  console.log("body", body);
  //  create if fare doesn't exists from to userProfile
  UserProfileDal.create(body)
    .then(retrievedUserProfile =>{
      if(retrievedUserProfile===400)
      return res.status(400).json({message:`${body.username} already in use.`})
      res.status(201).json(retrievedUserProfile)
    },
      error => res.send(error))
}
/**
 *2. Find all list of userProfiles controller
 */
function findAllUserProfile(req, res, next) {
  var allUserProfiles = {};
  UserProfileDal.findAll(allUserProfiles)
    .then((userProfiles) => {
      //if(error) return res.status(500).send({"ERROR": "Unable to fecth userProfile document!"})
      if (!userProfiles) return res.status(404).json({
        "ERROR": "NO userProfile FOUND"
      });
    res.json(userProfiles);
    }, function(error) {
      res.status(500).send({
        "ERROR": "Unable to fecth userProfile document!"
      })
    })
}

/**
 *3. Search userProfile by query instead of req.body
 */
function searchProfileByUserName(req, res, next) {
  var username = req.params.username;

  UserProfileDal.searchByName(username)
    .then(userProfile=> {
      console.log("userProfile",userProfile.length)
      if (userProfile===404) return res.status(404).json({
        "message": "No matching user profile found"
      });
      res.json(userProfile);
    }, error=> res.send(error)
    )
}
function validObjectId(id){
return mongoose.Types.ObjectId.isValid(id.toString());
}
/**
 *4. Find userProfile by their ID controller
 */
function findUserProfileById(req, res) {
  debug('GETTING USERPROFILE BY ID:');
  var userProfileId = req.params.id;
  //chech if userProfile ObjectId is valid or not
  if (validObjectId(userProfileId)) {
    UserProfileDal.findById(userProfileId)
      .then(userProfile => {
        if(!userProfile)   return res.status(404).send({
          message: "No matching userProfile found"
        }); //userProfile not found
        res.json(userProfile);
      }, error=> res.send(error))

  } else {
    res.status(400).send({
      "message": "UserProfile Id is not valid"
    });
  }
}

function getUserProfileByCustomId(req, res) {
  debug('GETTING USERPROFILE')
  var customid = req.params.cid;
  //console.log("my userProfile id : " + customid);

  UserProfileDal.findByCustomId(customid)
    .then((userProfile) => {
      if (userProfile === 404) return res.status(404).send({
        "message": "No matching userProfile found"
      });
      console.log(userProfile)
      res.status(200).send(userProfile);
    }, err =>{
      error.status(500).send({
        "message": "unable to find userProfile",
        error:error
      });
    });
}
/**
 *5. Update userProfile Info Controller
 */
function updateUserProfileInfo(req, res) {
  var modifiedAt = new Date();
  req.body.modifiedAt = modifiedAt;
  var userProfileData = _.pick(req.body, ["name", "userProfileId", "latitude", "longitude", "route", "modifiedAt"]);
  console.log("userProfileData", userProfileData)

  var address = {};
  address.subcity = req.body.address.subcity;
  address.kebele = req.body.address.kebele;
  address.woreda = req.body.address.woreda;
  address.st = req.body.address.st;

  var updates = {
    name: req.body.name,
    userId: req.body.userId,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    address: address,
    modifiedAt: req.body.modifiedAt
  };

  var query = {
    _id: req.params.id
  };
  var setUpdates = {
    $set: updates
  };
  var updateOptions = {
    new: true
  };
  if(validObjectId(query._id)){
  UserProfileDal.update(query, setUpdates, updateOptions)
    .then(updateduserProfile => {
      //if no content found
      if (!updateduserProfile)
        return res.status(400).send({
          "Message": "No content found to update"
        });

      res.send(updateduserProfile);
    }, error => res.status(500).json(error))
  }else{
   res.status(400).send({
        "Message": "Invalid user profile id"
      });
    }
}
/**
 *6. Delete userProfile Controller
 */
function deleteUserProfileById(req, res) {
  var query = {
    _id: req.params.id
  };
  if (validObjectId(query._id)) {
  UserProfileDal.delete(query)
    .then(userProfile => {
      if (!userProfile) return res.status(404).send({
        "message": "Content already removed"
      });
      return res.send({
        "message": "uccesfully removed",
        userProfile
      });
    }, error => {
      res.status(500).send({
        "error": error
      });
    })}else{
      return res.status(400).send({
    "message": "Invalid User Profile Id."
})
    }

}
/**
 *7. GET ALL USER PROFILE DOCUMENTS BY PAGINATION
 */

function findUserProfileByPagination (req, res, next){
    debug('GET USERPROFILE COLLECTION BY PAGINATION');

    var query = req.query.query || {};
    var qs = req.query;

UserProfileDal.paginate(query, qs)
              .then(function(docs){
                  if(!docs)
                     return res.status(404).json({message:"Profile not found"});
                  res.json(docs);
              })
              .catch(error=>next(error));
}


/**
 *II. Export userProfile Controllers
 */
module.exports = {
  create: createUserProfile,
  findAll: findAllUserProfile,
  findById: findUserProfileById,
  update: updateUserProfileInfo,
  delete: deleteUserProfileById,
  paginate: findUserProfileByPagination,
  findByCustomId: getUserProfileByCustomId,
  searchByUsername: searchProfileByUserName
}
