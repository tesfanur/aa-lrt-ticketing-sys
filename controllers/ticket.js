/**
*Load module dependecies
*/
var debug    = require('debug');
var moment   = require('moment');
var mongoose = require('mongoose');
var ObjectID = require('mongodb').ObjectID;
var _        = require('lodash');//lodash can also do the same.check?
var Ticket  = require('../models/ticket');
//Data Access Layers
var TicketDal    = require('../dal/ticket');
var FareDal      = require('../dal/fare');
var StationDal   = require('../dal/station');
//controllers
var stationController = require('./station');

//utility module
var handleError  = require('../lib/utils').handleError;
var errorHandler = require('../lib/utils').errorHandler;
var logMsg       = require('../lib/utils').showMsg;

//private members
function _validateTicketRegistraionInput(req, res,next){
  console.log("message from input validation function");
  //req.checkBody('type','ticket type is required').notEmpty();
  req.checkBody('route','rotue of journey is required').notEmpty();
  req.checkBody('from','starting station is required').notEmpty();
  req.checkBody('to','destination station is required').notEmpty();
  req.checkBody('price','price of journey is required').notEmpty();//remove this validation urlencoded
  //since it is included by fetching from db calculated field
  //ticket id, status, passengerId & price are calculated fields so they already
  //not needed here for validation
    var errors = req.validationErrors();
    if(errors){
      console.log("errors",errors);
     return res.status(400).json(errors);
     }
   }
/**
*1. create new ticket
*/

function createTicket (req, res, next){

        var body = req.body;
            body.passengerId = req.user._id;
            //since mongoose ObjectId validator uses string as input otherwise its result is true for any Number
            var sourceId=body.from.toString();
            var destinationId=body.to.toString();

            // console.log("sourceId",sourceId)
            // console.log("destinationId",destinationId)
            var generatedStation={}
            stationController.findByCustomId(parseInt(sourceId))
                             .then(station=>{
                               generatedStation=station;
                               console.log("source station",sourceId);
                               if(station) return res.send(station);
                             })
                             .catch(err=> {
                               console.log(err);
                               res.status(500).send(err)
                             });
            console.log("generatedStation",generatedStation);

            //chech if station ObjectId is valid or not
            //var validSourceId=mongoose.Types.ObjectId.isValid(sourceId);
            var validSourceId=ObjectID.isValid(sourceId);
            var validDestinationId=ObjectID.isValid(destinationId);

            // console.log("validSourceId",validSourceId)
            // console.log("validDestinationId",validDestinationId)

        //find the price from the fare document
        //pick only the required attributes from the body
        //var body = _.pick(req.body,["type","route","from","to"]);
        var body = _.pick(req.body,["route","from","to","price","passengerId"]);
        _validateTicketRegistraionInput(req, res, next);
        //console.log("body",body);
               if(!(validSourceId && validDestinationId)){
                  return  res.status(400).send({"message":"Source and/or station Ids is/are not valid"});
               } else{
                 //console.log("!(validSourceId && validDestinationId)",(validSourceId && validDestinationId));
                  //  create if fare doesn't exists from to ticket
                 TicketDal.create(body)
                           .then((retrievedTicket)=> {
                             console.log("ticket :: ",retrievedTicket)
                                if(retrievedTicket==400) return res.status(400).send({"message":"Hello Mr "+userEmail+" you have already bought a ticket at  specify time from ticke info "+body.from +" "+ body.to +". Do you want to buy again"});
                                return res.status(201).json(retrievedTicket);//ticket created succesfully
                           }, function(err){
                             res.send(err)
                           });
                  }
}

function calculateTicketPrice(from, to){


}
/**
*2. Find all list of tickets controller
*/
function findAllTicket(req, res, next){
  var alltickets={};
  TicketDal.findAll(alltickets)
          .then((tickets) => {
            //if(error) return res.status(500).send({"ERROR": "Unable to fecth ticket document!"})
            //if(!tickets) return res.status(404).json({"ERROR": "NO ticket FOUND"});
            return res.status(200).json(tickets);
          }, function(error){
            res.status(500).send({"ERROR": "Unable to fecth ticket document!"})
          })
   }
   //fineMine
   /**
   *2. Find all list of my tickets controller
   */
   function findAllMyTicket(req, res, next){
     var passengerId=req.user._id
     var allMyTickets={passengerId:passengerId};
     TicketDal.findAll(allMyTickets)
             .then((tickets) => {
               //if(error) return res.status(500).send({"ERROR": "Unable to fecth ticket document!"})
               //if(!tickets) return res.status(404).json({"ERROR": "NO ticket FOUND"});
               return res.status(200).json(tickets);
             }, function(error){
               res.status(500).send({"ERROR": "Unable to fecth ticket document!"})
             })
      }

 /**
 *3. Search ticket by query instead of req.body
 */
  function searchTicketByName  (req, res, next){
     var ticketName = req.params.name;

     TicketDal.searchByName(ticketName)
               .then( function(ticket){
                    if(ticket===404) return  res.status(404).json({"message":"No muching ticket found"});
                   res.status(200).json(ticket);
               },function(err){
                 res.status(500).send({"Error":"Unable to find ticket"})
               })
 }
/**
*4. Find ticket by their ID controller
*/
function findTicketById(req, res){
  console.log('Getting ticket by id:');
  var ticketId=req.params.id;
  //chech if ticket ObjectId is valid or not
  var validObjectId=mongoose.Types.ObjectId.isValid(ticketId);

  if(validObjectId){
    TicketDal.findById(ticketId)
            .then(ticket => {
              if(ticket===404) return res.status(404).send({"message":"No muching ticket found"});
               res.json(ticket);
            },function(err){
              res.status(500).sendStatus(err);
            })

      } else{
        res.status(400).send({"message":"Ticket Id is not valid"});
      }
   }

function findTicketByCustomId(req,res){
       debug('GETTIGN STATION')
       var customid = req.params.cid;
       //console.log("my ticket id : " + customid);

 TicketDal.findByCustomId(customid)
           .then((ticket) => {
               if(ticket===404) return res.status(404).send({"message":"No muching ticket found"});
               console.log(ticket)
               res.status(200).send(ticket);
           },function(err){
             res.status(500).send({"message":"unable to find ticket"});
           });
   }
/**
*5. Update ticket Info Controller
*/
function updateTicketInfo(req,res){
  var modifiedAt = new Date();
  req.body.modifiedAt=modifiedAt;
  var ticketData= _.pick(req.body,["name","ticketId","latitude","longitude","route","modifiedAt"]);
  console.log("ticketData", ticketData)
  var updates ={
    name:req.body.name,
    ticketId:req.body.ticketId,
    latitude:req.body.latitude,
    longitude:req.body.longitude,
    route:req.body.route,
    modifiedAt:req.body.modifiedAt};
  var query         = {_id:req.params.id};
  var setUpdates    = {$set: updates };
  var updateOptions = {new: true};

  TicketDal.update(query,setUpdates,updateOptions)
         .then(updatedticket => {
           //no content found
           if(!updatedticket)
           //use 204 instead of 404 for update operation if the document to be updates
           //didn't exist
           return res.status(404).send({"Message": "No content found to update"});

           res.send(updatedticket);
         }, function(err){
           res.status(500).json(e);
         })



}
/**
*6. Delete ticket Controller
*/
function deleteTicketById(req,res){
  var query= {_id:req.params.id};
  TicketDal.delete(query)
         .then(ticket => {
           if(ticket===404) return res.status(404).send({"message":"Content already removed"});
           return res.send({"message":"succesfully removed",ticket});
         }, err=>{
           res.status(404).send({"error":e});
         })

}
/**
*7. Get collection paginate
*/
function findTicketByPagination (req, res, next){
    debug('GET STATION COLLECTION BY PAGINATION');

    var query = req.query.query || {};
    var qs = req.query;

    TicketDal.paginate(query, qs)
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
*calculate ticket price
**/
function generateTicketInfo(req, res, next){
  //use station customid to buy ticket
  //front end guy can use station for final users
  var from=parseInt(req.body.from);
  var to=parseInt(req.body.to);
  var route =(req.body.route).toUpperCase();

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
      var user =req.user
      FareDal.generateTicket(route, from,to,user)
                    .then(ticket=>{
                      if(ticket) {
                        console.log(ticket);
                      //return res.send(ticket);
                      var ticketData ={
                        route: ticket.route,
                        passengerId:ticket.passengerId,
                        from:ticket.source_id,
                        to :ticket.destination_id,
                        price:ticket.paid
                      };
                         //console.log(ticketData)
                      TicketDal.create(ticketData)
                             .then(createdTicket=>{
                               console.log("createdTicket",createdTicket)
                               if(createdTicket)
                               return res.status(201).send(ticket);
                             })
                             .catch(err =>{
                               console.log(err);
                               res.status(500).send(err);
                             })
                    }
                    })
                    .catch(err=>{
                      console.log(err);
                      res.status(500).send(err)
                    });
      }

}
/**
*II. Export ticket Controllers
*/
module.exports = {
    //create    : create_ticket,
    create       : createTicket,
    searchByName : searchTicketByName,
    findAll   : findAllTicket,
    findMine  : findAllMyTicket,
    findById  : findTicketById,
    update    : updateTicketInfo,
    delete    : deleteTicketById,
    paginate  : findTicketByPagination,
    //findByName: findTicketByName,
    findByCustomId:findTicketByCustomId,
    generateInfo  :generateTicketInfo
}
