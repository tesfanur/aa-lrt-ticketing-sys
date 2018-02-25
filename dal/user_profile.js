/**
*Load module dependecies
*/
const debug   = require('debug')('api:userProfile-dal');
const q       = require('q');

const UserProfileModel = require('../models/user_profile');
const logMsg  = require('../lib/utils').showMsg;

const UserProfileDalModule = (function(UserProfileModel){
  'use strict';
/**
*1. Create UserProfileModel
*/
function createUserProfile(data){
   debug('CREATING A NEW FARE');
   //save fare info
    let userProfile = new UserProfileModel(data);
    return new Promise((resolve,reject)=>{
   UserProfileModel.findOne({userId:data.userId})
                   .exec()
                   .then(result => {
                     if(result) return resolve(400);//bad request to create userProfile that already exists
                     userProfile.save()
                         .then((result) => {
                            resolve(result);
                          }, function(err){
                            return reject(err);
                          })
                   });
                  })

}

  /**
  *2. Get all UserProfileModels
  */
  function getAllUserProfiles(query){
      debug('GETTING ALL USERPROFILE COLLECTION');
       var defferd = q.defer();
   UserProfileModel.find(query)
            .populate('userId',"email phone")//to be refactored
            .sort({createdAt :-1})
            .exec()
            .then( (userProfiles) => {
              defferd.resolve(userProfiles);
           }, function(err) {
             defferd.reject(err);
           });
    return defferd.promise;
  }
  /**
  *3.Get UserProfile by Id
  */
   function getUserProfileById(id){
        debug('GETTING STATION', id)
        logMsg("my userProfile id : " + id);

      return new Promise((resolve, reject)=>{
UserProfileModel.findOne({_id : id})
                .populate('userId',"email phone")//to be refactored
                .sort({createdAt :-1})
                .exec()
                .then((result) => {
                    if(!result) return resolve(404);//userProfile not found
                    return resolve(result);
                },function(err){
                   reject(err);
                });
      })
    }
    /**
    *find userProfile by custom id
    **/
  function getUserProfileByCustomId(customid){
      debug('GETTIGN STATION', customid)
      //logMsg("userProfile customid : " + customid);
      var defferd = q.defer();
      UserProfileModel.findOne({userProfileId : customid})
          .exec()
          .then((result) => {
              //logMsg("dal result",result)
              if(!result) return defferd.resolve(404);
              return defferd.resolve(result);
          },function(err){
            defferd.reject(err);
          });
      return defferd.promise
  }

  /**
  *3. Search userProfile by query instead of req.body
  */
function searchUserProfileByName(username){

  return new Promise((resolve,reject)=>{
        UserProfileModel.findOne({username:username})
                     .populate("userId","email phone")
                     .then(function(result){
                         //if no userProfile found return 404
                         if(!result) resolve(404);
                         resolve(result);
                     }, function(err){
                       reject(err)
                     })
  });
  }

function userProfileExist(userProfileId){
   debug('CHECKING STATION EXISTENCE');
   logMsg({userProfileId: userProfileId});
   var defferd = q.defer();
UserProfileModel.findOne({userProfileId:userProfileId})
            .exec()
            .then((err,result) => {
              if(err) return defferd.reject(err);
              //if userProfile doesn't exist
              //if(!result) return defferd.resolve(false);
              defferd.resolve(result);
            })

        return defferd.promise;

}
function userProfileExist(userProfileId){
   debug('CHECKING STATION EXISTENCE');
   logMsg({userProfileId: userProfileId});

return new Promise((resolve, reject)=>{
  UserProfileModel.findOne({userProfileId:userProfileId})
              .exec()
              .then((result) => {
                //if userProfile doesn't exist
                if(!result) return resolve(true);
                 resolve(400);//bad request
              },(err)=>{
                reject(err);
              })
 });
}

/**
*3.Update UserProfile
*/
function updateUserProfile(query, update, opts){
    debug('updating a userProfile', query);

    return new Promise((resolve, reject)=>{
      UserProfileModel.findOneAndUpdate(query, update, opts)
                      .exec()
                      .then((result) => {
                          //if(!result) return resolve();//no content found
                            resolve(result);
                      }, (err)=>{
                        reject(err)
                      });
    });

}
/**
*4.Remove UserProfile
*/
function deleteUserProfile(query){
    debug('DELETING STATION');

    return new Promise((resolve, reject)=>{
      UserProfileModel.findOneAndRemove(query)
               .then((result)=>{
                   if(!result) return resolve(404);
                   resolve(result)
                 }, err=>{
                   reject(err);
                 });
    })


}

/**
*5.Get userProfile by pagination
*/
function getUserProfileByPagination(query, qs){
    debug('fetching a collection of userProfiles');
    var defferd =q.defer();
    var opts = {
        sort: qs.sort || {},
        page: qs.page || 1,
        limit: qs.per_page || 10
    };

    UserProfileModel.paginate(query, opts, (err, data)=>{
        if(err) return defferd.reject(err);

        if(!data) return defferd.reject("UserProfile not found");

        var response = {
            page: data.page,
            total_docs: data.total,
            total_pages: data.pages,
            per_page: data.limit,
            docs: data.docs
        };
       return defferd.resolve(response);
    });
    return defferd.promise;
}

//
/**
*6.return UserProfileDalModule public APIs
*/
  return {
  create   : createUserProfile,
  findAll  : getAllUserProfiles,
  findById : getUserProfileById,
  update : updateUserProfile,
  delete : deleteUserProfile,
  paginate : getUserProfileByPagination,
  userProfileExist: userProfileExist,
  findByCustomId:getUserProfileByCustomId,
  searchByName:searchUserProfileByName
};
}(UserProfileModel));

module.exports= UserProfileDalModule;
