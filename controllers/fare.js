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


var customError = {
    status : 500,
    type : "FARE_ERROR",
    message:""
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
*1. CONTROLLER TO CREATE FARE DOCUMENT
*/
function createFare (req, res, next){
        _validateUserRegifareInput(req, res, next);
        var body = req.body;
            body.userId = req.user._id;
        var from = body.from;
        var to = body.to;
        //pick only the required attributes from the body
        var body = _.pick(req.body,["userId","from","to","distance"]);
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
                         .then((fare)=> {
                               //if(!fare) return res.status(500).send("UNABLE TO CREATE FARE DATA");
                              res.status(201).json(fare);//fare created succesfully
                         })
                         .catch(err => {
                              res.status(500).send(err);
                         });
                  }
                })
                .catch(e=>{
                  //console.log("e",e);
                  res.status(500).send(e);
                })
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
              res.send(fares);
          })
          .catch(err => { res.status(500).send(err);
          });
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
           .then((fare)=>{
               if(fare) return res.send(fare);
               res.status(404).send({"message":"No muching document found."});
           })
           .catch(
               (err)=>{
                res.status(500).json({"error":"SERVER ERROR"});
               });
}
/**
*6. CONTROLLER TO SEARCH FARE DOCUMENT BY ???
*/
 function searchFare(req, res, next){
    var query = req.body;
    customError.type = 'SEARCH_FARE_ERROR';

    FareDal.getById(query, function(err, fare){
         if(!fare){
           customError.message = "COULDN'T FIND STATIION \'"+query+".";

           return handleError(res, customError);
           }
        if(err)  return handleError(res, customError);
        //if succesfull
        res.status(200).json(fare || {});
    })
}
/**
*7. CONTROLLER TO UPDATE FARE DOCUMENT INFO
*/
function updateFare (req, res, next){
    var fareId = req.params.id;

    var update = req.body;
    var now = moment().toISOString();
    update.lastModified = now;

    FareDal.update(fareId, update, function(err, fare){
        if(err){
            customError.type = 'UPDATE_FARE_ERROR';
            return handleError(res, err, customError);
        }
        res.json(fare || {});
    })
}
/**
*8. CONTROLLER TO DELETE/REMOVE FARE DOCUMENT
*/
function deleteFare (req, res, next){
    var fareId = req.params.id;

    FareDal.delete({_id: fareId}, function(err, fare){
        if(err){
            customError.type = 'DELETE_FARE_ERROR';
            customError.status=404;
            return handleError(res, err, customError);
        }
        res.json(fare || {});
        if(!fare)
        res.status(404).json({"message":"No fare found with id " +fareId});

    })
}
/**
*9. CONTROLLER TO GET FARE DOCUMENTS BY PAGINATION
*/
function getFareByPagination (req, res, next){
    debug('Get fare collection by pagination');

    var query = req.query.query || {};
    var qs = req.query;

    FareDal.paginate(query, qs, function(err, docs){
        if(err){
            customError.type = 'GET_FAREs_PAGINATE_ERROR';
            //return handleError(res, err, customError);
            return errorHandler(res, customError);
        }
        res.json(docs);
    })
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
                if(fare===404) return res.status(404).json({"error":"No muching fare document found"});
                res.json(fare);
            })
            .catch( (err)=>{
                  res.satus(500).send(err);
              })

}
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
        search   : searchFare,
        update   : updateFare,
        delete   : deleteFare,
        paginate : getFareByPagination,
        findAndPopulate:findFareAndPopulate,
        setFareAmount:setFareAmount,
        setDistance : setDistance,
        getTotalPrice:getTotalPrice,
        completeInfo:getCompleteFareInfo
      };

}(FareDal));
/**
*expose fare controllers
*/
module.exports=FareModule;
