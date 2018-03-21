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
  //===================================================
  var username = ticket.passengerId.username || "";
  var email = ticket.passengerId.email || "";
  var phone = ticket.passengerId.phone || "";
  var createdAt = moment(ticket.createdAt).format("Do-MMM-YYYY");
  if (email != "noemail@nodomain.com" & phone != "+251000000000")
    var userId = username || email || phone;
  var response = {
    message: "Valid ticket",
    _id: ticket._id,
    ticketId: ticket.id,
    passenger: userId,
    sourceEng: ticket.from.nameEng,
    destinationEng: ticket.to.nameEng,
    sourceAmh: ticket.from.nameAmh,
    destinationAmh: ticket.to.nameAmh,
    price: ticket.price,
    route: ticket.route,
    type: ticket.type,
    status: ticket.status,
    createdAt: createdAt
  };
  return response;

  //===================================================
  // if (!ticket) return {};
  // var url = req.protocol + '://' +
  //   req.hostname + req.originalUrl;
  // var createdAt = moment(ticket.createdAt).format("DD-MMM-YYYY hh:mm A");
  // var modifiedAt = moment(ticket.modifiedAt).format("DD-MMM-YYYY hh:mm A");
  // var passenger = ticket.passengerId
  // var sourceEng = ticket.from.nameEng || "";
  // var destinationEng = ticket.to.nameEng || "";
  // var sourceAmh = ticket.from.nameAmh || "";
  // var destinationAmh = ticket.to.nameAmh || "";
  // var passenger = ticket.passengerId
  // var passenger = ticket.passengerId
  //
  // return {
  //   _id: ticket._id,
  //   //passenger : passenger,//user should be admin
  //   ticketId: ticket.id,
  //   route: ticket.from.route,
  //   from: ticket.from.name,
  //   to: ticket.to.name,
  //   createdAt: createdAt,
  //   modifiedAt: modifiedAt,
  //   // request: {
  //   //   method,
  //   //   url
  //   // }
  // };

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
  var str = bytes.toString(cryptoJS.enc.Utf8);

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
  if (!IsJsonString(str)) {
    return console.log({
      query_result: "Invalid json"
    });
  }

  var decryptedTicket = JSON.parse(bytes.toString(cryptoJS.enc.Utf8));
  // decryptedTicket =decryptedTicket.toObject()
  //decryptedTicket =_.pick(decryptedTicket,"generateTicket _id route passengerId from to price existingPrice createdAt status type id")
  var result = {
    query_result: encryptedTicket,
    decryptedTicket: decryptedTicket
  }
  return result;
}
/**
 *decrypt ticket
 */
function decrypt_ticket(encryptedTicket) {
  return new Promise((resolve, reject) => {
    var bytes = cryptoJS.AES.decrypt(encryptedTicket, config.CRYPTO_SECRET);
    var str = bytes.toString(cryptoJS.enc.Utf8);

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
    if (!IsJsonString(str)) {
      //console.log({query_result:"Invalid json"});
      return reject({
        query_result: "Invalid json"
      });
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
    return res.send({
      "query_result": "Source and station are not on the same route"
    });

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
    //valid source and destination
    var user = req.user;
    
    var source = from.toString().substr(1, from.toString().length - 1);
    var destination = to.toString().substr(1, to.toString().length - 1);

    source = parseInt(source);
    destination = parseInt(destination)
    var stationCount = Math.abs(destination - source);
    var ticketPrice = calculateTicketPrice(stationCount);

    StationDal.findByCustomId(from)
      .then(sourceStation => {
        //console.log("source",sourceStation)
        return sourceStation
      }).then(sourceStation => {
          console.log("source",sourceStation)
          StationDal.findByCustomId(to)
            .then(destinationStation => {
              console.log("destinationStation",destinationStation)
              destinationStation = JSON.parse(JSON.stringify(destinationStation))
              var ticket = {
                passengerId: req.user._id,
                sourceEng:sourceStation.nameEng,
                destinationEng:destinationStation.nameEng,
                from: sourceStation._id,
                to: destinationStation._id,
                price: ticketPrice,
                numberOfStationsTravelled: stationCount,
                route: route
              }
              //console.log("ticket",ticket)
              TicketDal.create(ticket)
                .then(result => {
                  if (result) {

                    console.log("ticket", result)
                    if (ticketPrice) {
                      ticket._id = result._id;
                      var newResult = encryptTicket(ticket)
                      //console.log(decryptTicket(newResult))
                      return res.status(201)
                        .send(decryptTicket(newResult))
                    }
                  }

                })
                .catch(error => {
                  next(error);
                })


            })
            .catch(error => next(error))

        }

      )
      .catch(error => next(error))

  }

  //}

}


function calculateTicketPrice(counter) {
  var numOfStationsTravelled = Math.abs(counter);
  //console.log("numOfStationsTravelled",numOfStationsTravelled)
  if (numOfStationsTravelled >= 1 && numOfStationsTravelled <= 8) {
    return 2;
  } else if (numOfStationsTravelled > 8 && numOfStationsTravelled <= 16) {
    return 4;
  } else if (numOfStationsTravelled > 16 & numOfStationsTravelled < 25) {
    return 6;
  } else {
    return false; //invalid range
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
          sourceEng: ticket.from.nameEng,
          destinationEng: ticket.to.nameEng,
          sourceAmh: ticket.from.nameAmh,
          destinationAmh: ticket.to.nameAmh,
          price: ticket.price,
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
      tickets = JSON.parse(JSON.stringify(tickets));
      //console.log("tickets",tickets)

      var publickTicket = [];
      var ticket = {};
      for (var i = 0; i < tickets.length; i++) {
        ticket = tickets[i];
        console.log("ticket", ticket);
        console.log("===================================")
        var createdAt = moment(ticket.createdAt).format("Do-MMM-YYYY hh:mm A");

        var username = ticket.passengerId.username || "";
        var email = ticket.passengerId.email || "";
        var phone = ticket.passengerId.phone || "";
        var userId = ticket.passengerId.username;

        if (email != "noemail@nodomain.com" & phone != "+251000000000")
          userId = email || username || phone;
        var response = {
          _id: ticket._id,
          ticketId: ticket.id,
          passenger: userId,
          sourceEng: ticket.from.nameEng,
          destinationEng: ticket.to.nameEng,
          sourceAmh: ticket.from.nameAmh,
          destinationAmh: ticket.to.nameAmh,
          price: ticket.price,
          route: ticket.route,
          type: ticket.type,
          status: ticket.status,
          createdAt: createdAt
        };

        console.log("response", response)
        response.encryptTicket = encryptTicket(response);
        // console.log(response)
        publickTicket.push(response);

      }


      handleTicketResponse(res, {
        query_result: publickTicket
      });
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
        console.log("ticket", ticket)
        if (!ticket) return res.status(404).send({
          query_result: "No matching ticket found"
        })
        ticket = JSON.parse(JSON.stringify(ticket));
        handleTicketResponse(res, {
          query_result: getTicketAttributes(req, "GET", ticket)
        });
      })
      .catch(error => next(error));

  } else {
    res.status(400).send({
      "query_result": "Ticket Id is not valid"
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
  var ticketData = _.pick(req.body, ["nameEng", "nameAmh", "ticketId", "", "route", "modifiedAt"]);
  console.log("ticketData", ticketData)
  var updates = {
    nameEng: req.body.nameEng,
    nameAmh: req.body.nameAmh,
    ticketId: req.body.ticketId,
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
      if (updatedticket) {
        updatedticket = JSON.parse(JSON.strignify(updatedticket));
        var response = {
          _id: updatedticket._id,
          ticketId: updatedticket.ticketId,
          source: updatedticket.from.nameEng,
          destination: updatedticket.to.nameEng,
          source: updatedticket.from.name,
          price: updatedticket.price,
        }
        console.log("ticket", response);
      }
      console.log("ticket", response);
      handleTicketResponse(res, response);
    })
    .catch(error => next(error));
}
/**
 *update ticket status
 */
function updateTicketStatus(req, res, next) {
  var modifiedAt = new Date();
  req.body.modifiedAt = modifiedAt;
  var query = {
    _id: req.params.id
  };
  console.log("query", query)
  var ticketData = _.pick(req.body, ["status", "modifiedAt", "_id"]);
  console.log("ticketData", ticketData)
  var updates = {
    status: ticketData.status,
    modifiedAt: ticketData.modifiedAt,
  };

  TicketDal.updateStatus(query, updates)
    .then(updatedticket => {
      if (updatedticket === 404 || updatedticket === 400)
        return res.status(404).send({
          "query_result": "This ticket has been already used."
        })

      if (updatedticket) {
        updatedticket = JSON.parse(JSON.stringify(updatedticket));
        var modifiedAt = moment(updatedticket.modifiedAt).format("Do-MMM-YYYY");
        var response = {
          query_result: "updated",
          _id: updatedticket._id,
          ticketId: updatedticket.id,
          source: updatedticket.from.nameEng,
          destination: updatedticket.to.nameEng,
          price: updatedticket.price,
          status: updatedticket.status,
          modifiedAt: modifiedAt,
        }
      }
      handleTicketResponse(res, {
        query_result: getTicketAttributes(req, "PUT", updatedticket)
      });
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
  var encryptedTicket = req.body.encryptedTicket || encodeURIComponent(req.query.encryptedTicket);
  // var encryptedTicket2="U2FsdGVkX1+Vte8rzfGwFRYDwQqwOw8kKKm+CXmODoOEyEnb0FmND9DCa0kxdigZkc63m6D4rj1e1kX2mV0hNXBO/MCSsnqZCssRW1jpV6pCIyaVG1z30Anxh39Q/oB6ZVjcbiqx9q343QxiOQFqrLBd3ngEFgVK1juBP4t8+kLcg/8utpMp64R/3aDMJvGAZ2SycIkehJgIL6URm5GtHzvrUb7m78VoGzBPDuw4YICW7g9LCaOsVwy+fO+yTbdDqfeBd7Y6X9lYfIHv/fvBsE0jr1EYlGTbEVw7UQ40myiu9MY9QZeN7RQwKTu+0ORu"
  //  console.log("encryptedTicket===encryptedTicket2 =>",encryptedTicket===encryptedTicket2)
  //   console.log("encryptedTicket :",encryptedTicket)

  decrypt_ticket(encryptedTicket)
    .then(result => {
      if (!result) return res.status(404).send({
        query_result: "No matching ticket found"
      })
      result = JSON.parse(JSON.stringify(result));
      var customId = result.decryptedTicket.ticketId;
      var _id = result.decryptedTicket._id;
      //console.log("customid", customId);
      //TODO:change replace customId by _id
      //TicketDal.findByCustomId(customId)
      //console.log("_id", _id)
      TicketDal.findById(_id)
        .then(ticket => {
          //console.log("ticket", ticket)
          if (!ticket || ticket === 404) return res.status(404).send({
            query_result: "Invalid Ticket"
          })
     

          ticket = JSON.parse(JSON.stringify(ticket));

          var username = ticket.passengerId.username || "";
          var email = ticket.passengerId.email || "";
          var phone = ticket.passengerId.phone || "";
          var createdAt = moment(ticket.createdAt).format("Do-MMM-YYYY");
          if (email != "noemail@nodomain.com" & phone != "+251000000000")
            var userId = username || email || phone;
          var response = { 
            _id: ticket._id,
            ticketId: ticket.id,
            passenger: userId,
            sourceEng: ticket.from.nameEng,
            destinationEng: ticket.to.nameEng,
            sourceAmh: ticket.from.nameAmh,
            destinationAmh: ticket.to.nameAmh,
            price: ticket.price,
            route: ticket.route,
            type: ticket.type,
            status: ticket.status,
            createdAt: createdAt
          };

          console.log("ticket.status",ticket.status);
          console.log('ticket.status==="unused"',ticket.status==="unused")
          if (ticket.status==="used" || ticket.status === "returned") return res.status(400).send({
            query_result: "Invalid Ticket",
            ticket:response
          })

          res.send({
            query_result: "Valid Ticket",
            ticket: response
          });
        })
        .catch(error => next(error));


    })
    .catch(error => {
      console.log("error", error);
      if (error.message === "Malformed UTF-8 data") {
        return res.status(400).send({
          query_result: "Invalid Ticket"
        })
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
  updateStatus: updateTicketStatus,
  delete: deleteTicketById,
  paginate: findTicketByPagination,
  findByCustomId: findTicketByCustomId,
  validateTicket: validateTicket
}
