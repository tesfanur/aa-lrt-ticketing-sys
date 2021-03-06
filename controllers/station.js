/**
 *Load module dependecies
 */
const debug = require('debug');
const moment = require('moment');
const mongoose = require('mongoose');
const _ = require('lodash'); //lodash can also do the same.check?
const Station = require('../models/station');
//const _Station  = require('../models/_station');

const StationDal = require('../dal/station');
const utils = require('../lib/utils');

//console.log(stations)

//private members
function _validateStationRegistationInput(req, res, next) {
  req.checkBody('_id', 'station id is required').notEmpty();
  req.checkBody('nameEng', 'station nameEng is required').notEmpty();
  req.checkBody('nameAmh', 'station nameAmh is required').notEmpty();
  req.checkBody('route', 'route is required').notEmpty();
  req.checkBody('latitude', 'latitude is required').notEmpty();
  req.checkBody('longitude', 'longitude is required').notEmpty();
  var errors = req.validationErrors();
  if (errors) {
    //refactor this to pass it to the error handling middlewrare
    console.log("errors", errors);
    return res.status(400).json(errors);
  }
}
/**
 *1. create new station
 */
/**
 *Handle common faq(frequently asked questions) responses
 **/
function handleStationResponse(res, method, doc) {
  if (!doc || doc === 404) return utils.handleResponse(res, 404, doc);
  if (method === "POST") return utils.handleResponse(res, 201, doc);
  return utils.handleResponse(res, 200, doc);
}

function getStationAttributes(req, method, station) {
  if (!station) return {};
  station = JSON.parse(JSON.stringify(station));
  var url = req.protocol + '://' +
    req.hostname + req.originalUrl;
  var createdAt = moment(station.createdAt).format("DD-MMM-YYYY");
  var modifiedAt = moment(station.modifiedAt).format("DD-MMM-YYYY");
  var user = station.createdBy;

  var email = user.email || "";
  var phone = user.phone || "";
  if (user.email != "noemail@nodomain.com")
    email = user.email;
  if (user.phone != "+251000000000");
  phone = user.phone || "";
  var userId = user.username || email || phone;

  var nameEng = station.nameEng;
  var nameAmh = station.nameAmh;
  console.log("nameEng", nameEng);
  console.log("nameAmh", nameAmh);

  var response = {
    _id: station._id,
    createdBy: userId, //user should be admin
    nameEng: station.nameEng,
    nameAmh: station.nameAmh,
    route: station.route,
    longitude: station.longitude,
    latitude: station.latitude,
    createdAt: createdAt,
    modifiedAt: modifiedAt,
    request: {
      method,
      url
    }
  };
  console.log("station", response)
  return response;

}
/**
 *2.Create new station controller
 */
function createStation(req, res, next) {

  var body = req.body;
  body.createdBy = req.user._id;
  var _id = body._id;
  //pick only the required attributes from the body
  var body = _.pick(req.body, ["nameEng", "nameAmh", "_id", "createdBy", "longitude", "latitude", "route"]);
  _validateStationRegistationInput(req, res, next);
  
  //console.log("body",body);
  //  create if fare doesn't exists from to station
  StationDal.create(body)
    .then((createdStation) => {
      console.log("station :: ", createdStation)
      if (createdStation === 400)
        return res.status(400).send({
          "message": body._id + " station already exists"
        });
      var response = getStationAttributes(req, "POST", createdStation);
      utils.handleResponse(res, 201, response); //station created succesfully
    }, (error) => {
      next(error);
    })
}
/*
 *2. Find all list of stations controller
 */
function findAllStation(req, res, next) {
  var allstations = {};
  StationDal.findAll(allstations)
    .then((stations) => {
      if (!stations) return res.status(404).json({
        "ERROR": "NO station FOUND"
      });
      var stationCount = stations.length;
      var response = {
        stationCount: stationCount,
        stations: stations.map((st) => {
          return res.send(stations)
          //return getStationAttributes(req, "GET", st);
        })
      }
      //console.log(stations)
      //return res.status(200).json(response});
      utils.handleResponse(res, 200, response);
    }, (error) => {
      next(error);
    })
}

/**
 *3. Search station by query instead of req.body
 */
function searchStationByName(req, res, next) {
  var name = req.params.name.trim().toLowerCase();
  console.log("station name", name)
  StationDal.searchByName(name)
    .then((stations) => {
      if (stations === 404)
        return utils.handleResponse(res, 404, stations)
      var response = {
        stationCount: stations.legnth,
        stations: stations.map((station) => {
          return getStationAttributes(req, "GET", station);
        })
      }

      utils.handleResponse(res, 200, response);
    }, (error) => {
      next(error);
    })
}

/**
 *4. Find station by their ID controller
 */
function findStationById(req, res, next) {
  console.log('GETTING STATION BY ID:');
  var station_id = parseFloat(req.params.id.trim());
  //chech if station ObjectId is valid or not
  var validStationId = isNumeric(station_id);

  function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  if (validStationId) {
    StationDal.findById(station_id)
      .then(station => {
        if (station) {
          var token = req.token;
          station = JSON.parse(JSON.stringify(station));
          console.log("station from controller", station)
          var response = getStationAttributes(req, "GET", station); 
          return utils.handleResponse(res, 200, response);
        }
        //else
        return utils.handleResponse(res, 404, station);
      }, (error) => {
        next(error);
      })

  } else {
    res.status(400).send({
      "message": "Station Id is not valid"
    });
  }
}

function getStationByCustomId(req, res, next) {
  debug('GETTIGN STATION')
  var customid = Number(req.params.cid);
  //console.log("my station id : " + customid);

  StationDal.findByCustomId(customid)
    .then((station) => {
      if (!station) return res.status(404).send({
        "message": "No muching station found"
      });
      //console.log(station)
      return res.send(getStationAttributes(req, "GET", station));
    }, function(err) {
      next(err);
      //res.status(500).send({"message":"unable to find station"});
    });
}
/**
 *5. Update station Info Controller
 */
function updateStationInfo(req, res, next) {
  var modifiedAt = new Date();
  req.body.modifiedAt = modifiedAt;
  var stationData = _.pick(req.body, ["nameEng", "nameAmh", "_id", "latitude", "longitude", "route", "modifiedAt"]);
  console.log("stationData", stationData)
  var updates = {
    nameEng: req.body.nameEng,
    nameAmh: req.body.nameAmh,
    _id: req.body._id,
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

  StationDal.update(query, setUpdates, updateOptions)
    .then(updatedstation => {
      //no content found
      if (!updatedstation)
        //use 204 instead of 404 for update operation if the document to be updates
        //didn't exist
        return res.status(404).send({
          "Message": "No content found to update"
        });
      res.send(getStationAttributes(req, "PUT", updatedstation));
    }, function(err) {
      res.status(500).json(err);
    })



}
/**
 *6. Delete station Controller
 */
function deleteStationById(req, res, next) {
  var query = {
    _id: req.params.id
  };

  StationDal.delete(query)
    .then(station => {
      if (!station || station === 404)
        return utils.handleResponse(res, 404, station);
      //else
      utils.handleResponse(res, 200, {
        "message": "succesfully removed",
        station
      })
    }, error => {
      next(error);
    })

}
/**
 *7. Get collection paginate
 */
function findStationByPagination(req, res, next) {
  debug('GET STATION COLLECTION BY PAGINATION');

  var query = req.query.query || {};
  var qs = req.query;

  StationDal.paginate(query, qs)
    .then(function(docs) {
      if (docs) return res.json(docs);
    })
    .catch(error => {
      next(error);
    });
}

/**
 * populate stations collection automatically
 */
function populateStationCollection(req, res, next) {
  const stations = require('../lib/newstations');
  var createdBy = req.user._id;
  console.log("createdBy", createdBy);
  StationDal.populate(createdBy, stations)
    .then(result => {
      if (result)
        res.send({
          stationCount: result.length,
          result
        })
    })
    .catch(error => next(error));

}


/**
 *II. Export station Controllers
 */
module.exports = {
  create: createStation,
  searchByName: searchStationByName,
  findAll: findAllStation,
  findById: findStationById,
  update: updateStationInfo,
  delete: deleteStationById,
  paginate: findStationByPagination,
  findByCustomId: getStationByCustomId,
  populate: populateStationCollection
}