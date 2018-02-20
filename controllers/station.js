/**
*Load module dependecies
*/
var debug    = require('debug');
var moment   = require('moment');
var mongoose = require('mongoose');
var _        = require('lodash');//lodash can also do the same.check?
var Station  = require('../models/station'); 

var StationDal   = require('../dal/station');
var handleError  = require('../lib/utils').handleError;
var errorHandler = require('../lib/utils').errorHandler;
var logMsg       = require('../lib/utils').showMsg;

//private members
function _validateStationRegistationInput(req, res,next){
  req.checkBody('stationId','station id is required').notEmpty();
  req.checkBody('name','station name is required').notEmpty();
  req.checkBody('route','route is required').notEmpty();
  req.checkBody('latitude','latitude is required').notEmpty();
  req.checkBody('longitude','longitude is required').notEmpty();
    var errors = req.validationErrors();
    if(errors){
      console.log("errors",errors);
     return res.status(400).json(errors);
     }
   }
/**
*1. create new station
*/

function createStation (req, res, next){
        _validateStationRegistationInput(req, res, next);
        var body = req.body;
            body.userId = req.user._id;
        var stationId = body.stationId;
        //pick only the required attributes from the body
        var body = _.pick(req.body,["name","stationId","userId","longitude","latitude","route"]);
        //console.log("body",body);
                  //  create if fare doesn't exists from to station
                 StationDal.create(body)
                           .then((retrievedStation)=> {
                             console.log("station :: ",retrievedStation)
                                if(retrievedStation==400) return res.status(400).send({"message":body.stationId +" station already exists"});
                                return res.status(201).json(retrievedStation);//station created succesfully
                           }, function(err){
                             res.send(err)
                           })
}
/**
*2. Find all list of stations controller
*/
function findAllStation(req, res, next){
  var allstations={};
  StationDal.findAll(allstations)
          .then((stations) => {
            //if(error) return res.status(500).send({"ERROR": "Unable to fecth station document!"})
            //if(!stations) return res.status(404).json({"ERROR": "NO station FOUND"});
            return res.status(200).json(stations);
          }, function(error){
            res.status(500).send({"ERROR": "Unable to fecth station document!"})
          })
   }

 /**
 *3. Search station by query instead of req.body
 */
  function searchStationByName  (req, res, next){
     var stationName = req.params.name;

     StationDal.searchByName(stationName)
               .then( function(station){
                    if(station===404) return  res.status(404).json({"message":"No muching station found"});
                   res.status(200).json(station);
               },function(err){
                 res.status(500).send({"Error":"Unable to find station"})
               })
 }
/**
*4. Find station by their ID controller
*/
function findStationById(req, res){
  console.log('Getting station by id:');
  var stationId=req.params.id;
  //chech if station ObjectId is valid or not
  var validObjectId=mongoose.Types.ObjectId.isValid(stationId);

  if(validObjectId){
    StationDal.findById(stationId)
            .then(station => {
              if(station===404) return res.status(404).send({"message":"No muching station found"});
               res.json(station);
            },function(err){
              res.status(500).sendStatus(err);
            })

      } else{
        res.status(400).send({"message":"Station Id is not valid"});
      }
   }

function getStationByCustomId(req,res){
       debug('GETTIGN STATION')
       var customid = req.params.cid;
       //console.log("my station id : " + customid);

 StationDal.findByCustomId(customid)
           .then((station) => {
               if(station===404) return res.status(404).send({"message":"No muching station found"});
               console.log(station)
               res.status(200).send(station);
           },function(err){
             res.status(500).send({"message":"unable to find station"});
           });
   }
/**
*5. Update station Info Controller
*/
function updateStationInfo(req,res){
  var modifiedAt = new Date();
  req.body.modifiedAt=modifiedAt;
  var stationData= _.pick(req.body,["name","stationId","latitude","longitude","route","modifiedAt"]);
  console.log("stationData", stationData)
  var updates ={
    name:req.body.name,
    stationId:req.body.stationId,
    latitude:req.body.latitude,
    longitude:req.body.longitude,
    route:req.body.route,
    modifiedAt:req.body.modifiedAt};
  var query         = {_id:req.params.id};
  var setUpdates    = {$set: updates };
  var updateOptions = {new: true};

  StationDal.update(query,setUpdates,updateOptions)
         .then(updatedstation => {
           //no content found
           if(!updatedstation)
           //use 204 instead of 404 for update operation if the document to be updates
           //didn't exist
           return res.status(404).send({"Message": "No content found to update"});

           res.send(updatedstation);
         }, function(err){
           res.status(500).json(e);
         })



}
/**
*6. Delete station Controller
*/
function deleteStationById(req,res){
  var query= {_id:req.params.id};
  StationDal.delete(query)
         .then(station => {
           if(station===404) return res.status(404).send({"message":"Content already removed"});
           return res.send({"message":"succesfully removed",station});
         }, err=>{
           res.status(404).send({"error":e});
         })

}
/**
*7. Get collection paginate
*/
function findStationByPagination (req, res, next){
    debug('GET STATION COLLECTION BY PAGINATION');

    var query = req.query.query || {};
    var qs = req.query;

    StationDal.paginate(query, qs)
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
*II. Export station Controllers
*/
module.exports = {
    //create    : create_station,
    create    :createStation,
    searchByName    : searchStationByName,
    findAll   : findAllStation,
    findById  : findStationById,
    update    : updateStationInfo,
    delete    : deleteStationById,
    paginate  : findStationByPagination,
    //findByName: findStationByName,
    findByCustomId:getStationByCustomId
}
