/**
 *Load module dependecies
 */
const debug = require('debug')('api:ticket-dal');
const q = require('q');
const moment = require('moment');
const cryptoJS = require("crypto-js");
const nodeZxing = require('node-zxing');


const TicketModel = require('../models/ticket');
const logMsg = require('../lib/utils').showMsg;
//instantiate qr encoder module
var qrdecoder = nodeZxing();

const TicketDalModule = (function(TicketModel) {
  'use strict';
  /**
   *1. Create TicketModel
   */
  function createTicket(data) {
    debug('CREATING A NEW TICKET');
    //save fare info
    let newTicket = new TicketModel(data);
    return new Promise((resolve, reject) => {
      newTicket.save()
        .then((result) => {
          resolve(result);
        }, function(err) {
          return reject(err);
        })
    });

  }

  /**
   *2. Get all TicketModels
   */
  function getAllTickets(query) {
    debug('getting all ticket collection');
    var defferd = q.defer();
    // TicketModel.find(query, {
    //     createdAt: -1
    //   })
    TicketModel.find(query)
      .populate('from', "name route stationId id")
      .populate('to', "name route stationId id")
      .populate('passengerId', "email phone username userType")
      .sort({
        createdAt: -1
      })
      .exec()
      .then((docs) => {
        if (docs) {
          console.log(docs)
          //var publickTicket =JSON.parse(JSON.stringify(tickets));
          //var publickTicket = tickets;
          //publickTicket.createdAt = moment(tickets.createdAt).format("DD-MMM-YYYY hh:mm A");
          defferd.resolve(docs);
        }
      }, function(err) {
        defferd.reject(err);
      });

    return defferd.promise;
  }
  /**
   *3. Get all my TicketModels
   */
  function getAllMyTickets(query) {
    debug('GETTING ALL TICKET COLLECTION');
    var defferd = q.defer();
    TicketModel.find(query)
      .populate('from', "name route stationId")
      .populate('to', "name route stationId")
      .populate('passengerId', "email phone")
      .sort({
        createdAt: -1
      })
      .exec()
      .then((tickets) => {
        defferd.resolve(tickets);
      }, function(err) {
        defferd.reject(err);
      });

    return defferd.promise;
  }
  /**
   *3.Get Ticket by Id ?
   */
  function getTicketById(id) {
    debug('GETTIGN STATION', id)
    console.log("my ticket id : ", id);

    return new Promise((resolve, reject) => {
      TicketModel.findOne({
          _id: id
        })
        .populate('from', "name route stationId")
        .populate('to', "name route stationId")
        .populate('passengerId', "email phone")
        .exec()
        .then((result) => {
          if (!result) return resolve(404); //ticket not found
          return resolve(result);
        }, function(err) {
          reject(err);
        });
    })
  }


  function getTicketByCustomId(id) {
    debug('GETTIGN STATION', id)
    logMsg("my ticket id : " + id);
    var defferd = q.defer();
    TicketModel.findOne({
        id: id
      })
      .populate('from', "name route stationId")
      .populate('to', "name route stationId")
      .populate('passengerId', "email phone")
      .exec()
      .then((result) => {
        if (!result) return defferd.resolve(404);
        return defferd.resolve(result);
      }, function(err) {
        defferd.reject(err);
      });
    return defferd.promise
  }

  /**
   *3. Search ticket by query instead of req.body
   */
  function searchTicketByName(name) {

    return new Promise((resolve, reject) => {
      TicketModel.findOne({
          name: name
        })
        .then(function(result) {
          //if not ticket found return 404
          if (!result) resolve(404);
          resolve(result);
        }, function(err) {
          reject(err)
        })
    });
  }

  function ticketExist(ticketId) {
    debug('CHECKING STATION EXISTENCE');
    logMsg({
      ticketId: ticketId
    });
    var defferd = q.defer();
    TicketModel.findOne({
        ticketId: ticketId
      })
      .exec()
      .then((err, result) => {
        if (err) return defferd.reject(err);
        //if ticket doesn't exist
        //if(!result) return defferd.resolve(false);
        defferd.resolve(result);
      })

    return defferd.promise;

  }

  function ticketExist(ticketId) {
    debug('CHECKING STATION EXISTENCE');
    logMsg({
      ticketId: ticketId
    });

    return new Promise((resolve, reject) => {
      TicketModel.findOne({
          ticketId: ticketId
        })
        .exec()
        .then((result) => {
          //if ticket doesn't exist
          if (!result) return resolve(true);
          resolve(400); //bad request
        }, (err) => {
          reject(err);
        })
    });
  }

  /**
   *3.Update Ticket
   */
  function updateTicket(query, update, opts) {
    debug('updating a ticket', query);

    return new Promise((resolve, reject) => {
      TicketModel.findOneAndUpdate(query, update, opts)
        .exec()
        .then((result) => {
          //if(!result) return resolve();//no content found
          resolve(result);
        }, (err) => {
          reject(err)
        });
    });

  }
  /**
   *4.Remove Ticket
   */
  function deleteTicket(query) {
    debug('DELETING STATION');
    var defferd = q.defer();
    return new Promise((resolve, reject) => {
      TicketModel.findOneAndRemove(query)
        .then((result) => {
          if (!result) return resolve(404);
          resolve(result)
        }, err => {
          reject(err);
        });
      //return defferd.promise;
    })


  }

  /**
   *5.Get ticket by pagination
   */
  function getTicketByPagination(query, qs) {
    debug('fetching a collection of tickets');
    var defferd = q.defer();
    var opts = {
      sort: qs.sort || {},
      page: qs.page || 1,
      limit: qs.per_page || 10
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

  /*
   *QR decoder/Converts qr image into text
   */
  function decodeQrCode(imagePath) {
    //validate image path
    //invalid path....
    return new Promise((resolve, reject) => {
      qrdecoder.decode(imagePath,
        function(err, decodedResult) {
          if (err) return reject("couldn't get image file from " + imagePath)
          var bytes = cryptoJS.AES.decrypt(decodedResult, 'secret key 123');
          var decryptedData = JSON.parse(bytes.toString(cryptoJS.enc.Utf8));
          var result = {
            encryptedTicket: decodedResult,
            decryptedTicket: decryptedData
          }

          resolve(result)
        }
      );

    })
  }

  /**
   *6.return TicketDalModule public APIs
   */
  return {
    create: createTicket,
    findAll: getAllTickets,
    fineMine: getAllMyTickets,
    findById: getTicketById,
    update: updateTicket,
    delete: deleteTicket,
    paginate: getTicketByPagination,
    ticketExist: ticketExist,
    findByCustomId: getTicketByCustomId,
    searchByName: searchTicketByName,
    decodeQrCode: decodeQrCode
  };
}(TicketModel));

module.exports = TicketDalModule;
