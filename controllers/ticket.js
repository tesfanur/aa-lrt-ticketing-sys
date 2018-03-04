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
function encryptTicket(ticket) {
  // Encrypt
  ciphertext = cryptoJS.AES.encrypt(JSON.stringify(ticket), config.CRYPTO_SECRET);
  return ciphertext.toString();
}

/**
 *Convert encrypted data into QR image
 **/
var ticket = {
  "name": "Tesfaye Belachew Abebe",
  "profession": "Developer"
};

var encryptedTicket = encryptTicket(ticket);
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
encodeQRcode(encryptedTicket);

function decryptTicket(encryptedTicket) {
  var bytes = cryptoJS.AES.decrypt(encryptedTicket, config.CRYPTO_SECRET);
  var decryptedTicket = JSON.parse(bytes.toString(cryptoJS.enc.Utf8));
  var result = {
    encryptedTicket: encryptedTicket,
    decryptedTicket: decryptedTicket
  }
  return result;
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
          console.log(ticket);
          //return res.send(ticket);
          if (!ticket.id) ticket.id = shortid.generate();

          var ticketData = {
            id: ticket.id,
            route: ticket.route,
            passengerId: ticket.passengerId,
            from: ticket.source_id,
            to: ticket.destination_id,
            price: ticket.paid
          };
          //console.log(ticketData)
          TicketDal.create(ticketData)
            .then(createdTicket => {
              console.log("createdTicket", createdTicket)
              if (createdTicket)
                return createdTicket;
              //return res.status(201).send(createdTicket);
            }).then(
              generatedTicket => {
                if (generatedTicket) {
                  console.log("generatedTicket_id:::", generatedTicket._id)
                  TicketDal.findById({
                      _id: generatedTicket._id
                    })
                    .then(result => {
                      //tesfaye todo
                      var newResult = encryptTicket(result)
                      console.log(decryptTicket(newResult))
                      if (result)
                        return res.status(201)
                          .send(decryptTicket(newResult))
                    }).catch(
                      err => {
                        res.status(500).send(err);
                      }
                    )
                }

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
  TicketDal.findAll(alltickets)
    .then((tickets) => {
      var ticketCount = 0;
      if (tickets) ticketCount = tickets.length;
      handleTicketResponse(res, {
        "Number of tickets sold:": ticketCount,
        tickets
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
  var ticketId = req.params.id;
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
  debug('GETTIGN STATION')
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
  debug('GET STATION COLLECTION BY PAGINATION');

  var query = req.query.query || {}; //default : find all tickets
  var queryParams = req.query;

  TicketDal.paginate(query, queryParams)
    .then(function(docs) {
      handleTicketResponse(res, docs);
    })
    .catch(error => next(error));
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
  findByCustomId: findTicketByCustomId
}