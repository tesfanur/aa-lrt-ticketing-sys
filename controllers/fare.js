/**
*Load module dependecies
*/
var debug    = require('debug');
var moment   = require('moment');
var mongoose = require('mongoose');
var _        = require('lodash');//lodash can also do the same.check?
var q        = require('q');

var FareDal         = require('../dal/fare');
var StationDal      = require('../dal/station');

var handleError  = require('../lib/utils').handleError;
var errorHandler = require('../lib/utils').errorHandler;
var logMsg       = require('../lib/utils').showMsg;
var utils       = require('../lib/utils');
/**
*Handle fare responses
**/
  function handleFareResponse(res,method, doc){
    if(!doc || doc===404) return utils.handleResponse(res,404,doc);
     if(method==="POST") return utils.handleResponse(res,201,doc);
     return utils.handleResponse(res,200,doc);
  }


//create global fare object and attach any required fields to it
//then export the object to expose its feature from other source Profile

var FareModule = (function (FareDal) {
  'use strict';
  //private members
  function _validateUserRegifareInput(req, res,next){
    req.checkBody('from','starting destination is required').notEmpty();
    req.checkBody('to','destination station id is required').notEmpty();
    req.checkBody('distance','distance b/n is required').notEmpty();
      var errors = req.validationErrors();
      if(errors){
        logMsg(errors);
       return res.status(400).json(errors);
       }

  }
  /**
  *Handle fare responses
  **/
    function handleFareResponse(res,method, doc){
      if(!doc || doc===404) return utils.handleResponse(res,404,doc);
       if(method==="POST") return utils.handleResponse(res,201,doc);
       return utils.handleResponse(res,200,doc);
    }
/**
*1. CONTROLLER TO CREATE FARE DOCUMENT
*/
function createFare (req, res, next){
        _validateUserRegifareInput(req, res, next);
        var body = req.body;
            body.userId = req.user._id;
        var from = body.from;
        var to = body.to;
        //pick only the required attributes from the body
        var body = _.pick(req.body,["userId","from","to","distance","route"]);
        console.log("body",body);
        //validate source and destination id
        var sourceId=from;
        var destinationId=to;
        //chech if User ObjectId is valid or not
        var validSourceId=mongoose.Types.ObjectId.isValid(sourceId);
        var validDestinationId=mongoose.Types.ObjectId.isValid(destinationId);

        if(validSourceId && validDestinationId){
          //check if fare exists
         FareDal.fareExist(from, to)
                .then(result => {
                  if(result){
                    res.status(400).send({"message":"Fare from "+from +" to "+to+" already exists"});
                  }
                  else{
                    //  create if fare doesn't exists from to station
                  FareDal.create(body)
                         .then(fare   => handleFareResponse(res,req.method,fare))
                         .catch(error => next(error));
                  }
                })
                .catch(error => next(error));
        }
        else{
          res.status(400).send({"Message":"Source or Destination Id is invalid"});
        }
}
/**
*2. CONTROLLER TO SET FARE AMOUNT
*/
function setFareAmount(){
  var body = req.body;
      body.userId = req.user._id;
  FareDal.setFareAmount(body.from.body.to,body.fare)
         .then(result => {
           if(result) return res.send(result);
           res.status(500).send({"MESSAGE":"UNABLE TO SET FARE AMOUNT"});
         })
         .catch(err => { res.status(500).send(err)});
}
/**
*3. CONTROLLER TO SET DISTANCE B/N TWO STATIONS
*/
function setDistance(){
  var body = req.body;
      body.userId = req.user._id;
  FareDal.setFareAmount(body.from.body.to,body.distance)
         .then(result => {
           if(result) return res.send(result);
           res.status(500).send({"MESSAGE":"UNABLE TO SET   DISTANCE"});
         })
         .catch(err => { res.status(500).send(err)});

}
/**
*4. CONTROLLER TO GET ALL FARE DOCUMENTS
*/
function getAllFares(req, res, next){
    FareDal.getAll({})
          .then(fares=>{
              if(fares) fares= {"total number of fare documents":fares.length,fares}
              handleFareResponse(res,req.method,fares);
          })
          .catch(error => next(error));
}
/**
*5. CONTROLLER TO GET FARE DOCUMENT BY ID
*/
function getFareById (req, res, next){
      //var fareId = req.params.id.trim
      //var fareId = mongoose.Types.ObjectId(req.params.id);
      var fareId = mongoose.mongo.ObjectId( req.params.id.trim());
    console.log(typeof fareId)

    FareDal.getById(fareId)
           .then(fare=>handleFareResponse(res,req.method,fare))
           .catch(error=>next(error));
}
 /**
*7. CONTROLLER TO UPDATE FARE DOCUMENT INFO//refactor this too
*/
function updateFare(req,res,next){
  var fareId = req.params.id;

  //var update = req.body;
  var modifiedAt = new Date();

  req.body.modifiedAt=modifiedAt;

  var fareData= _.pick(req.body,["from","to","modifiedAt","price","distance"]);

  var updates =fareData;

  var query         = {_id:req.params.id};
  var setUpdates    = {$set: updates };
  var updateOptions = {new: true};
  var method =req.method;
FareDal.update(query,setUpdates,updateOptions)
       .then(updatedfaq =>handleFareResponse(res,method,updatedfaq))
       .catch(error=>next(error));
}

/**
*8. CONTROLLER TO DELETE
*/
function deleteFare(req,res,next){
 var query= {_id:req.params.id};
 var method=req.method;
  FareDal.delete(query)
        .then(faq =>handleFareResponse(res,method,faq))
        .catch(error=>next(error));
}
/**
*9. CONTROLLER TO GET FARE DOCUMENTS BY PAGINATION//refactor this too
*/
function getFareByPagination(req, res, next){
    debug('GET FARE COLLECTION BY PAGINATION');
    var query = req.query.query || {};//default query: find all
    var queryParams = req.query;
    var method = req.method;

    FareDal.paginate(query, queryParams)
              .then(docs=>handleFareResponse(res,method,docs))
              .catch(error=>next(error));
}
/**
*10. CONTROLLER TO UPDATE FARE DOCUMENT AND POPULATE WITH COMPLETE RELATED INFO
*/
function findFareAndPopulate (req, res, next){
      //var fareId = req.params.id.trim
      //var fareId = mongoose.Types.ObjectId(req.params.id);
      var fareId = mongoose.mongo.ObjectId(req.params.id.trim());
    console.log(typeof fareId)

    FareDal.findAndPopulate({_id : fareId})
            .then( function(fare){
                  handleFareResponse(res,req.method,fare);
            })
            .catch(error=>next(error))

}
/**
*Get total ticket price
*/
function getTotalPrice(req, res, next){
  FareDal.getTotalPrice()
        .then((price)=>{
          if(price) res.send(price)
        }, err=>{
          res.send(err)
        })

}

function getCompleteFareInfo(req, res, next){
  var from=parseInt(req.query.from);
  var to=parseInt(req.query.to);
  var route =(req.query.route).toUpperCase();

  function validateStationIds(id,route){
    if(!isNaN(id) && route=="EW"){
      return (id >=11 && id<=121)
    }
    else if(!isNaN(id) && route=="NS"){
      return (id >=26 && id<=227)
    }
    else{
      return false
    }
  }
  var validSourceId =validateStationIds(from,route);
  var validDestinationId =validateStationIds(to,route);

  //console.log("route = "+route + " from = " + from +" to = "+ to)

  if(!(validSourceId && validDestinationId)){
    var validStationIdRange="Valid station Id range for ";
    if(route=="NS"){
      validStationIdRange+="NS route is from 26 to 226"
    }
    else if(route==="EW"){
        validStationIdRange+="NS route is from 11 to 122"
      }
    return res.status(400).send({"Error":"Source and/or destination id are not valid",
   stationIdRange: validStationIdRange})
  }
  else {

  FareDal.completeInfo(route,from,to)
         .then((info)=>{
           //var count = _.isArray(info)
           //console.log(count,info.length);
           var totalDistance=0;
           var totalPrice=0;
           var counter =0;
           try{
           //let station= info[key].source;
           //console.log("station", station)
           info.forEach(function(station){
             totalDistance+=station.distance;
             totalPrice+=station.ticketPrice;
             // console.log(station.source.stationId," to ",
             // station.destination.stationId,station.distance,
             // station.ticketPrice.toFixed(2)+'ETB', station.source.route);

           } );
        }catch(err){
          console.log(err)
        }
          console.log("travel strats at "+ from + " and ends at " +to);
          console.log("total distance =",totalDistance);
          console.log("paid =",totalPrice.toFixed(2)+"ETB");
          //var createdAt = moment( new Date(), 'MM-DD-YYYY HH:mm:ss',true).format("YYYY-MMM-DDD HH:mm:ss");
          var createdAt =moment(new Date()).format("DD-MMM-YYYY hh:mm A");

          var ticketInfo ={
            passengerId: req.user._id,
            passenger: req.user.email,
            phone:req.user.phone,
            travel:{
            from :from,
            to: to},
            paid: totalPrice.toFixed(2)+"ETB",
            status: "unused",
            boughtAt : createdAt
          };


          if(info) {
            //res.send(info)
            res.send(ticketInfo)
          }

        }, err=>{
          res.send(err)
        })
      }

}

/**
*Return public API
*/
 return {
        create   : createFare,
        getAll   : getAllFares,
        getById  : getFareById,
        //search   : searchFare,
        update   : updateFare,
        delete   : deleteFare,
        paginate : getFareByPagination,
        findAndPopulate:findFareAndPopulate,
        setFareAmount:setFareAmount,
        setDistance  : setDistance,
        getTotalPrice:getTotalPrice,
        completeInfo :getCompleteFareInfo
      };

}(FareDal));
/**
*expose fare controllers
*/
module.exports=FareModule;
