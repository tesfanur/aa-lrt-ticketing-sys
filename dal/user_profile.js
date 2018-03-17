/**
 *Load module dependecies
 */
const debug = require('debug')('api:userProfile-dal');
const q = require('q');
const _ = require('lodash');
const UserProfileModel = require('../models/user_profile');
const logMsg = require('../lib/utils').showMsg;

const UserProfileDalModule = (function(UserProfileModel) {
  'use strict';
  /**
   *1. Create UserProfileModel
   */
  function createUserProfile(user) {
    debug('CREATING A NEW USERPROFILE');
    //save USERPROFILE info
    let userProfile = new UserProfileModel(user);
    return new Promise((resolve, reject) => {
      UserProfileModel.findOne({
          username: user.username
        })
        .exec()
        .then(result => {
          if (result) return resolve(400);
          userProfile.save()
            .then(result => resolve(result),
              error => reject(error))
        });
    })

  }

  /**
   *2. Get all UserProfileModels
   */
  function getAllUserProfiles(query) {
    debug('GETTING ALL USERPROFILE COLLECTION');
    var defferd = q.defer();
    UserProfileModel.find(query)
      .populate('userId', "email phone") //to be refactored
      .sort({
        createdAt: -1
      })
      .exec()
      .then(userProfiles => {
          if (userProfiles) {
            userProfiles = {
              profileCount: userProfiles.length,
              userProfiles
            }
          }

          defferd.resolve(userProfiles)
        },
        error => defferd.reject(error))
    return defferd.promise;
  }
  /**
   *3.Get UserProfile by Id
   */
  function getUserProfileById(id) {
    debug('GETTING STATION', id)
    logMsg("my userProfile id : " + id);

    return new Promise((resolve, reject) => {
      UserProfileModel.findOne({
          _id: id
        })
        .populate('userId', "email phone") //to be refactored
        .sort({
          createdAt: -1
        })
        .exec()
        .then((result) => {
          if (!result) return reject({
            message: "No muching userProfile found"
          }); //userProfile not found
          return resolve(result);
        }, function(err) {
          reject(err);
        });
    })
  }
  /**
   *find userProfile by custom id
   **/
  function getUserProfileByCustomId(customid) {
    debug('GETTIGN STATION', customid)
    //logMsg("userProfile customid : " + customid);
    var defferd = q.defer();
    UserProfileModel.findOne({
        userProfileId: customid
      })
      .exec()
      .then((result) => {
        //logMsg("dal result",result)
        if (!result) return defferd.resolve(404);
        return defferd.resolve(result);
      }, function(err) {
        defferd.reject(err);
      });
    return defferd.promise
  }

  /**
   *3. Search userProfile by query instead of req.body
   */
  function searchUserProfileByName(name) {
    var filterdProfiles = [];
    return new Promise((resolve, reject) => {
      UserProfileModel.find({})
        .populate("userId", "email phone")
        .then(result => {
          filterdProfiles = _.filter(result, profile => {
            return profile.username
              .toLowerCase()
              .indexOf(name) > -1;
          })
          console.log("filterdProfiles", filterdProfiles)
          if (filterdProfiles.length === 0) return resolve(404);
          resolve(filterdProfiles);
        }, error => reject(error))
    });
  }

  /**
   *5.Get tickets by pagination
   */
  function getTicketByPagination(query, qs) {
    debug('fetching a collection of tickets');
    var defferd = q.defer();
    var opts = {
      sort: qs.sort || {},
      page: Number(qs.page) || 1,
      limit: Number(qs.per_page) || 10
    };

    TicketModel.paginate(query, opts, (err, data) => {
      if (err) return defferd.reject(err);

      if (!data) return defferd.reject("Ticket not found");

      var response = {
        page: data.page,
        total_docs: data.total,
        total_pages: data.pages,
        per_page: data.limit,
        docs: data.docs
      };
      if (data) return defferd.resolve(response);
    });
    return defferd.promise;
  }


  function userProfileExist(userProfileId) {
    debug('CHECKING STATION EXISTENCE');
    logMsg({
      userProfileId: userProfileId
    });
    var defferd = q.defer();
    UserProfileModel.findOne({
        userProfileId: userProfileId
      })
      .exec()
      .then((err, result) => {
        if (err) return defferd.reject(err);
        //if userProfile doesn't exist
        //if(!result) return defferd.resolve(false);
        defferd.resolve(result);
      })

    return defferd.promise;

  }

  function userProfileExist(userProfileId) {
    debug('CHECKING STATION EXISTENCE');
    logMsg({
      userProfileId: userProfileId
    });

    return new Promise((resolve, reject) => {
      UserProfileModel.findOne({
          userProfileId: userProfileId
        })
        .exec()
        .then((result) => {
          //if userProfile doesn't exist
          if (!result) return resolve(true);
          resolve(400); //bad request
        }, (err) => {
          reject(err);
        })
    });
  }

  /**
   *3.Update UserProfile
   */
  function updateUserProfile(query, update, opts) {
    debug('updating a userProfile', query);

    return new Promise((resolve, reject) => {
      UserProfileModel.findOneAndUpdate(query, update, opts)
        .exec()
        .then(result => resolve(result),
          error => reject(error));
    });

  }
  /**
   *4.Remove UserProfile
   */
  function deleteUserProfile(query) {
    debug('DELETING STATION');
    //validate query params
    console.log(query);
    return new Promise((resolve, reject) => {
      UserProfileModel.findOneAndRemove(query)
        .then(result => resolve(result),
          error => reject(error));
    })


  }

  /**
   *5.Get userProfile by pagination
   */
  function getUserProfileByPagination(query, qs) {
    debug('fetching a collection of profiles');
    var defferd = q.defer();
    var opts = {
      sort: qs.sort || {},
      page: qs.page || 1,
      limit: qs.per_page || 10
    };
    UserProfileModel.paginate(query, opts)
      .then((profiles) => {
        var response = {
          page: profiles.page,
          total_docs: profiles.total,
          total_pages: profiles.pages,
          per_page: profiles.limit,
          docs: profiles.docs
        };
        return defferd.resolve(response);
      })
      .catch(err => {
        defferd.reject(err);
      });
    return defferd.promise;
  }

  /**
   *6.return UserProfileDalModule public APIs
   */
  return {
    create: createUserProfile,
    findAll: getAllUserProfiles,
    findById: getUserProfileById,
    update: updateUserProfile,
    delete: deleteUserProfile,
    paginate: getUserProfileByPagination,
    userProfileExist: userProfileExist,
    findByCustomId: getUserProfileByCustomId,
    searchByName: searchUserProfileByName
  };
}(UserProfileModel));

module.exports = UserProfileDalModule;
