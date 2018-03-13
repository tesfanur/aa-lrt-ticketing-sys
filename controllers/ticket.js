/**
 *Load module dependecies
 */
const fs = require('fs');
const qr = require('qr-image');
const cryptoJS = require("crypto-js");
const moment = require('moment');
const mongoose = require('mongoose');
const ObjectID = require('mongodb').ObjectID;
const _ = require('lodash'); //lodash can also do the same.check?
const debug = require('debug')('Ticket-api');
const shortid = require('shortid');


/**
 *Steps to convert Ticket object into qr code
 *1. get/generate ticket info/object
 *2. convert it into string/stringify it
 *3. encrypt the text by cryptojs AES encryption feature
 *4. convert the encrypted ticket into qr code/image
 *5. send the qr code/image to the user/passenger
 *6. check the validity of the qr coded ticket using the ff sub steps
 *6.1 decode the qr image into its equivalent text
 *6.2 then decrypt the result into its equivalent original
 *    ticket info using cryptojs decryption feature
 *6.3 compare the result with the data recorded inside the db
 */
/**
 *Load local data access layer(dal) module dependecies
 */
const config = require('../config/config');
const FareDal = require('../dal/fare');
const TicketDal = require('../dal/ticket');
const StationDal = require('../dal/station');
//const Ticket   = require('../models/ticket');
/**
 *Load custom utility module dependecies
 */
const utils = require('../lib/utils');
/**
 *
 *******/

function getTicketAttributes(req, method, ticket) {
  if (!ticket) return {};
  var url = req.protocol + '://' +
    req.hostname + req.originalUrl;
  var createdAt = moment(ticket.createdAt).format("DD-MMM-YYYY hh:mm A");
  var modifiedAt = moment(ticket.modifiedAt).format("DD-MMM-YYYY hh:mm A");
  var passenger = ticket.passengerId
  var source = ticket.from.name || "";
  var destination = ticket.to.name || "";
  var passenger = ticket.passengerId
  var passenger = ticket.passengerId

  return {
    _id: ticket._id,
    //passenger : passenger,//user should be admin
    ticketId: ticket.id,
    route: ticket.from.route,
    from: ticket.from.name,
    to: ticket.to.name,
    createdAt: createdAt,
    modifiedAt: modifiedAt,
    request: {
      method,
      url
    }
  };

}

function encryptTicket(ticket) {
  // Encrypt
  ciphertext = cryptoJS.AES.encrypt(JSON.stringify(ticket), config.CRYPTO_SECRET);
  return ciphertext.toString();
}

/**
 *Convert encrypted data into QR image
 **/
  // var ticket = {
  //   "name": "Tesfaye Belachew Abebe",
  //   "profession": "Developer"
  // };
  //
  // var encryptedTicket = encryptTicket(ticket);
//console.log(encryptedTicket);
// var decryptedTicket =decryptTicket(encryptedTicket).decryptedTicket;
// console.log(decryptedTicket);


function encodeQRcode(encryptedData) {
  // Encrypt
  var cryptojs = cryptoJS.AES;
  var encryptedText = JSON.stringify(encryptedData);
  var ciphertext = cryptojs.encrypt(encryptedText, config.CRYPTO_SECRET);
  var qr_png = qr.image(ciphertext.toString(), {
    type: 'png'
  });
  //get the file name for QR image from ticket ID
  var ticketId = "r1NHbR5Pf"
  qr_png.pipe(fs.createWriteStream("./uploads/" + ticketId + ".png"));
}
//encodeQRcode(encryptedTicket);

function decryptTicket(encryptedTicket) {
  var bytes = cryptoJS.AES.decrypt(encryptedTicket, config.CRYPTO_SECRET);
  var str =bytes.toString(cryptoJS.enc.Utf8);
  function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
      console.log("Invalid json object")
        return false;
    }
      console.log("Valid json object")
    return true;
}
if(!IsJsonString(str)){
  return console.log({query_result:"Invalid json"});
}

  var decryptedTicket = JSON.parse(bytes.toString(cryptoJS.enc.Utf8));
  // decryptedTicket =decryptedTicket.toObject()
  //decryptedTicket =_.pick(decryptedTicket,"generateTicket _id route passengerId from to price existingPrice createdAt status type id")
  var result = {
    encryptedTicket: encryptedTicket,
    decryptedTicket: decryptedTicket
  }
  return result;
}
/**
*decrypt ticket
*/
function decrypt_ticket(encryptedTicket) {
return new Promise((resolve,reject)=>{
  var bytes = cryptoJS.AES.decrypt(encryptedTicket, config.CRYPTO_SECRET);
  var str =bytes.toString(cryptoJS.enc.Utf8);
  function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
    //  reject("Invalid json object")
        return false;
    }
      //console.log("Valid json object")
    return true;
}
if(!IsJsonString(str)){
  //console.log({query_result:"Invalid json"});
  return reject({query_result:"Invalid json"});
}

  var decryptedTicket = JSON.parse(bytes.toString(cryptoJS.enc.Utf8));
  // decryptedTicket =decryptedTicket.toObject()
  //decryptedTicket =_.pick(decryptedTicket,"generateTicket _id route passengerId from to price existingPrice createdAt status type id")
  var result = {
    encryptedTicket: encryptedTicket,
    decryptedTicket: decryptedTicket
  }
  return resolve(result);
});
}


var imagePath = "./images/ante.png";
/**
 *Convert decrypte QR image into text/which
 *is the encrypted version of the ticket
 **/
function decodeQrCode(req, res, next) {
  TicketDal.decodeQrCode(imagePath)
    .then(ticket => {
      console.log(ticket);
    })
    .catch(err => {
      console.log(err)
    })
}

//private members
function _validateTicketRegistraionInput(req, res, next) {
  console.log("message from input validation function");
  //req.checkBody('type','ticket type is required').notEmpty();
  req.checkBody('route', 'rotue of journey is required').notEmpty();
  req.checkBody('from', 'starting station is required').notEmpty();
  req.checkBody('to', 'destination station is required').notEmpty();
  //req.checkBody('price','price of journey is required').notEmpty();//remove this validation urlencoded
  //since it is included by fetching from db calculated field
  //ticket id, status, passengerId & price are calculated fields so they already
  //not needed here for validation
  var errors = req.validationErrors();
  if (errors) {
    console.log("errors", errors);
    return res.status(400).json(errors);
  }
}

function handleTicketResponse(res, ticket) {
  if (!ticket || ticket === 404) return utils.handleResponse(res, 404, ticket);
  ticket = JSON.parse(JSON.stringify(ticket));
  return utils.handleResponse(res, 200, ticket);
}
/**
 *1. create new ticket
 */

function createTicket(req, res, next) {
  //use station customid to buy ticket
  //front end guy can use station for final users


  var from = parseInt(req.body.from);
  var to = parseInt(req.body.to);
  var route = (req.body.route).toUpperCase();

  function startsWith(id) {
    return id.toString().substr(0, 1);
  }

  function validateStationIds(id, route) {
    if (!isNaN(id) && route == "EW") {
      return (id >= 11 && id <= 121)
    } else if (!isNaN(id) && route == "NS") {
      return (id >= 26 && id <= 227)
    } else {
      return false
    }
  }
  var validSourceId = validateStationIds(from, route);
  var validDestinationId = validateStationIds(to, route);


  //console.log("route = "+route + " from = " + from +" to = "+ to)
  if (startsWith(req.body.from) !== startsWith(req.body.to)) {
    StationDal.findByCustomId(from)
      .then(source => {
        var source = JSON.parse(JSON.stringify(source));
        var result = [];
        console.log(source, source);
        StationDal.findByCustomId(to)
          .then(destination => {
            var destination = JSON.parse(JSON.stringify(destination));
            console.log(destination, destination);
            result = [source, destination];
            return res.status(400).send({
                "query_result": `${source.name} and ${destination.name} ids are not on the same route`
              })
              .catch(error => next(error))
          })

      })
      .catch(error => next(error))

  }


  if (!(validSourceId && validDestinationId)) {
    var validStationIdRange = "Valid station Id range for ";
    if (route == "NS") {
      validStationIdRange += "NS route is from 26 to 226"
    } else if (route === "EW") {
      validStationIdRange += "NS route is from 11 to 122"
    }
    return res.status(400).send({
      "Error": "Source and/or destination id are not valid",
      stationIdRange: validStationIdRange
    })
  } else {
    var user = req.user
    FareDal.generateTicket(route, from, to, user)
      .then(ticket => {
        if (ticket) {
          //console.log(ticket);
          //return res.send(ticket);
          if (!ticket.id) ticket.id = shortid.generate();

          var ticketData = {
            id: ticket.id,
            route: ticket.route,
            passengerId: ticket.passengerId,
            from: ticket.source_id,
            to: ticket.destination_id,
            price: ticket.paid,
            priceByDistance: ticket.paid,
            existingPrice: ticket.existingPrice
          };
          //console.log("ticketData",ticketData)
          TicketDal.create(ticketData)
            .then(createdTicket => {
              //console.log("createdTicket", createdTicket)
              if (createdTicket)
                return createdTicket;
              //return res.status(201).send(createdTicket);
            }).then(
              generatedTicket => {
                if (generatedTicket) {
                  console.log("generatedTicket_id:::", ticket)
                  TicketDal.findById({
                      _id: generatedTicket._id
                    })
                    .then(result => {
                      //console.log(result)
                      //tesfaye todo
                      //var completeticket = new Object();
                      var completeticket = JSON.parse(JSON.stringify(result)); //solves individual property accessors

                      var publickTicket = {
                        _id: completeticket._id,
                        ticketId: completeticket.id,
                        //passenger: userId,
                        source: completeticket.from.name,
                        destination: completeticket.to.name,
                        price: completeticket.price,
                        existingPrice: completeticket.existingPrice,
                        route: completeticket.route,
                        type: completeticket.type,
                        status: completeticket.status,
                        //createdAt: completeticket.createdAt
                      };

                      //remove unwanted codes
                      console.log("publickTicket =", publickTicket)
                      completeticket.generateTicket = result;
                      completeticket.existingPrice = ticketData.existingPrice;

                      //completeticket.stationCount = counter;
                      //console.log("completeticket", completeticket)
                      //var newResult = encryptTicket({completeticket,newPrice:ticketData.existingPrice})
                      //  var newResult = encryptTicket(completeticket)
                      //publickTicket
                      var newResult = encryptTicket(publickTicket)
                      //console.log(decryptTicket(newResult))
                      if (result)
                        return res.status(201)
                          .send(decryptTicket(newResult))
                    }).catch(
                      err => {
                        res.status(500).send(err);
                      }
                    )
                } //end of if generateTicket

              }

            )
            .catch(err => {
              console.log(err);
              res.status(500).send(err);
            })
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err)
      });
  }

}

/**
 *2. Find all list of tickets controller
 */
function findAllTicket(req, res, next) {
  var alltickets = {};
  if (!req.isAdmin) alltickets = {
    passengerId: req.user._id
  };

  TicketDal.findAll(alltickets)
    .then(tickets => {
      //solve individual property accessor problem
      var tickets = JSON.parse(JSON.stringify(tickets));

      var publickTicket = [];
      var ticket = {}
      for (var i = 0; i < tickets.length; i++) {
        ticket = tickets[i];
        var createdAt = moment(ticket.createdAt).format("Do-MMM-YYYY hh:mm A");

        var username = ticket.passengerId.username;
        var email = ticket.passengerId.email;
        var phone = ticket.passengerId.phone;

        var userId = ticket.passengerId.username;
        if (email != "noemail@nodomain.com" & phone != "+251000000000")
          userId = ticket.passengerId.email || ticket.passengerId.phone;
        var response = {
          _id: ticket._id,
          ticketId: ticket.id,
          passenger: userId,
          source: ticket.from.name,
          destination: ticket.to.name,
          price: ticket.price,
          existingPrice: ticket.existingPrice,
          route: ticket.route,
          type: ticket.type,
          status: ticket.status,
          createdAt: createdAt
        };


        response.encryptTicket = encryptTicket(response);
        // console.log(response)
        publickTicket.push(response);

      }
      // var ticketCount =tickets.length;
      // var response = {
      //   ticketCount:ticketCount,
      //   tickets: tickets.map((ticket)=>{
      //
      //       return getTicketAttributes(req,"GET",ticket)
      //   })
      // }

      return res.status(200).json({
        "query_result": publickTicket
      });
    })
    .catch(error => next(error));
}
//fineMine
/**
 *2. Find all list of my tickets controller
 */
function findAllMyTicket(req, res, next) {
  var passengerId = req.user._id
  var allMyTickets = {
    passengerId: passengerId
  };
  TicketDal.findAll(allMyTickets)
    .then((tickets) => {

      handleTicketResponse(res, tickets);
    })
    .catch(error => next(error));

}
/**
 *4. Find ticket by their ID controller
 */
function findTicketById(req, res, next) {
  console.log('Getting ticket by id:');
  var ticketId = req.params.id.trim();
  //chech if ticket ObjectId is valid or not
  var validObjectId = mongoose.Types.ObjectId.isValid(ticketId);

  if (validObjectId) {
    TicketDal.findById(ticketId)
      .then(ticket => {
        handleTicketResponse(res, ticket);
      })
      .catch(error => next(error));

  } else {
    res.status(400).send({
      "message": "Ticket Id is not valid"
    });
  }
}

function findTicketByCustomId(req, res, next) {
  debug('GETTIGN TICKET')
  var customid = req.params.cid;
  //console.log("my ticket id : " + customid);

  TicketDal.findByCustomId(customid)
    .then((ticket) => {
      handleTicketResponse(res, ticket);
    })
    .catch(error => next(error));
}
/**
 *5. Update ticket Info Controller
 */
function updateTicketInfo(req, res, next) {
  var modifiedAt = new Date();
  req.body.modifiedAt = modifiedAt;
  var ticketData = _.pick(req.body, ["name", "ticketId", "latitude", "longitude", "route", "modifiedAt"]);
  console.log("ticketData", ticketData)
  var updates = {
    name: req.body.name,
    ticketId: req.body.ticketId,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    route: req.body.route,
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

  TicketDal.update(query, setUpdates, updateOptions)
    .then(updatedticket => {
      handleTicketResponse(res, updatedticket);
    })
    .catch(error => next(error));
}
/**
 *6. Delete ticket Controller
 */
function deleteTicketById(req, res, next) {
  var ticketId = req.params.id;
  //chech if ticket ObjectId is valid or not
  var validObjectId = mongoose.Types.ObjectId.isValid(ticketId);

  if (validObjectId) {
    var query = {
      _id: req.params.id
    };
    TicketDal.delete(query)
      .then(ticket => {
        handleTicketResponse(res, ticket);
      })
      .catch(error => next(error));
  } else {
    res.status(400).send({
      "message": "Invalid ticket Object Id"
    })
  }

}
/**
 *7. Get ticket documents by pagination
 */
function findTicketByPagination(req, res, next) {
  debug('GET TICKET COLLECTION BY PAGINATION');

  var query = req.query.query || {}; //default : find all tickets
  var queryParams = req.query;

  TicketDal.paginate(query, queryParams)
    .then(function(docs) {
      handleTicketResponse(res, docs);
    })
    .catch(error => next(error));
}

/**
 *Ticket Validation Controller
 */
function validateTicket(req, res, next) {
  debug('GET TICKET COLLECTION BY PAGINATION');
var encryptedTicket = req.body.encryptedTicket||encodeURIComponent(req.query.encryptedTicket);
// var encryptedTicket2="U2FsdGVkX1+Vte8rzfGwFRYDwQqwOw8kKKm+CXmODoOEyEnb0FmND9DCa0kxdigZkc63m6D4rj1e1kX2mV0hNXBO/MCSsnqZCssRW1jpV6pCIyaVG1z30Anxh39Q/oB6ZVjcbiqx9q343QxiOQFqrLBd3ngEFgVK1juBP4t8+kLcg/8utpMp64R/3aDMJvGAZ2SycIkehJgIL6URm5GtHzvrUb7m78VoGzBPDuw4YICW7g9LCaOsVwy+fO+yTbdDqfeBd7Y6X9lYfIHv/fvBsE0jr1EYlGTbEVw7UQ40myiu9MY9QZeN7RQwKTu+0ORu"
//  console.log("encryptedTicket===encryptedTicket2 =>",encryptedTicket===encryptedTicket2)
//   console.log("encryptedTicket :",encryptedTicket)

decrypt_ticket(encryptedTicket)
                .then(result=>{
                  if(!result) return res.status(404).send({query_result:"No matching ticket found"})
                  result = JSON.parse(JSON.stringify(result));
                  var customId = result.decryptedTicket.ticketId;
                  var _id = result.decryptedTicket._id;
                  //console.log("customid", customId);
                  //TODO:change replace customId by _id
                  //TicketDal.findByCustomId(customId)
                  console.log("_id",_id)
                  TicketDal.findById(_id)
                           .then(ticket =>{
                            console.log("ticket",ticket)
                             if(!ticket || ticket===404) return res.status(404).send({query_result:"Invalid Ticket"})
                             ticket = JSON.parse(JSON.stringify(ticket));

                            var username = ticket.passengerId.username ||"";
                            var email = ticket.passengerId.email||"";
                            var phone = ticket.passengerId.phone||"";
                            var createdAt = moment(ticket.createdAt).format("Do-MMM-YYYY hh:mm A");

                             if (email != "noemail@nodomain.com" & phone != "+251000000000")
                             var userId = username|| email||phone;
                             var response = {
                                message:"Valid ticket",
                               _id: ticket._id,
                               ticketId: ticket.id,
                               passenger: userId,
                               source: ticket.from.name,
                               destination: ticket.to.name,
                               price: ticket.price,
                               existingPrice: ticket.existingPrice,
                               route: ticket.route,
                               type: ticket.type,
                               status: ticket.status,
                               createdAt: createdAt
                             };

                          res.send(response);
                           })
                           .catch(error => next(error));


                })
                .catch (error=> {
                  console.log("error", error);
                  if(error.message==="Malformed UTF-8 data"){
                    return res.status(400).send({query_result:"Invalid Ticket"})
                  }
                  next(error)
                });

}

/**
 *II. Export ticket Controllers
 */
module.exports = {
  create: createTicket,
  findAll: findAllTicket,
  findMine: findAllMyTicket,
  findById: findTicketById,
  update: updateTicketInfo,
  delete: deleteTicketById,
  paginate: findTicketByPagination,
  findByCustomId: findTicketByCustomId,
  validateTicket:validateTicket
}
