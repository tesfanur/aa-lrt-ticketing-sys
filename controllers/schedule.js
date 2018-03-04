/**
 *Load module dependecies
 */
const debug = require('debug');
const moment = require('moment');
const mongoose = require('mongoose');
const _ = require('lodash'); //lodash can also do the same.check?
const Schedule = require('../models/schedule');

const ScheduleDal = require('../dal/schedule');
const utils = require('../lib/utils');

//private members
function _validateScheduleInput(req, res, next) {
  req.checkBody('stationId', 'Station id is required').notEmpty();
  req.checkBody('trainId', 'Train id is required').notEmpty();
  req.checkBody('arrivalTime', 'arrival time is required').notEmpty();
  req.checkBody('departureTime', 'departure time time is required').notEmpty();
  var errors = req.validationErrors();
  if (errors) {
    //refactor this to pass it to the error handling middlewrare
    console.log("errors", errors);
    return res.status(400).json(errors);
  }
}
/**
 *1. create new schedule
 */
/**
 *Handle faq responses
 **/
function handleScheduleResponse(res, method, doc) {
  if (!doc || doc === 404) return utils.handleResponse(res, 404, doc);
  if (method === "POST") return utils.handleResponse(res, 201, doc);
  return utils.handleResponse(res, 200, doc);
}

function getScheduleAttributes(req, method, schedule) {
  if (!schedule) return {};
  var url = req.protocol + '://' +
    req.hostname + req.originalUrl;
  var createdAt = moment(schedule.createdAt).format("DD-MMM-YYYY hh:mm A");
  var modifiedAt = moment(schedule.modifiedAt).format("DD-MMM-YYYY hh:mm A");

  var arrivalTime = moment(schedule.arrivalTime).format("DD-MMM-YYYY hh:mm A");
  var departureTime = moment(schedule.departureTime).format("DD-MMM-YYYY hh:mm A");

  var user = schedule.createdBy;
  return {
    _id: schedule._id,
    createdBy: user, //user should be admin
    trainId: schedule.trainId,
    arrivalTime: arrivalTime,
    departureTime: departureTime,
    createdAt: createdAt,
    modifiedAt: modifiedAt,
    request: {
      method,
      url
    }
  };

}
/**
 *2.Create new schedule controller
 */
function createSchedule(req, res, next) {
  _validateScheduleInput(req, res, next);
  var body = req.body;
  body.createdBy = req.user._id;

  function validTime(time) {
              //Assuming 24 hour time
              var patt = new RegExp("^(2[0-3]|[01]?[0-9]):([0-5]?[0-9])$");
              return patt.test(time);
          }

  var invalidTime =(validTime(body.arrivalTime) && validTime(body.departureTime));
  
   if(!invalidTime)
    return res.status(400).send({"message":"Invalid time"});
    //otherwise assign time to the body object
    body.arrivalTime= moment(body.arrivalTime, "hh:mm:ss");
    body.departureTime= moment(body.departureTime, "hh:mm:ss");

  //pick only the required attributes from the body
  var body = _.pick(req.body, ["createdBy","trainId", "stationId", "userId", "arrivalTime", "departureTime"]);
  //console.log("body",body);
  //  create if fare doesn't exists from to schedule
  ScheduleDal.create(body)
    .then((createdSchedule) => {
      console.log("schedule :: ", createdSchedule)
      if (createdSchedule === 400)
        return res.status(400).send({
          "message": body.scheduleId + " schedule already exists"
        });
      var response = getScheduleAttributes(req, "POST", createdSchedule);
      utils.handleResponse(res, 201, response); //schedule created succesfully
    }, (error) => {
      next(error);
    })
}
/**
 *2. Find all list of schedules controller
 */
function findAllSchedule(req, res, next) {
  var allschedules = {};
  ScheduleDal.findAll(allschedules)
    .then((schedules) => {
      if (!schedules) return res.status(404).json({
        "ERROR": "NO schedule FOUND"
      });
      var scheduleCount = schedules.length;
      var response = {
        scheduleCount: scheduleCount,
        schedules: schedules.map((st) => {
          return getScheduleAttributes(req, "GET", st);
        })
      }
      //return res.status(200).json(response});
      utils.handleResponse(res, 200, response);
    }, (error) => {
      next(error);
    })
}

/**
 *3. Search schedule by query instead of req.body
 */
function searchScheduleByName(req, res, next) {
  var name = req.params.name.trim().toLowerCase();
  ScheduleDal.searchByName(name)
    .then((schedules) => {
      if (schedules === 404)
        return utils.handleResponse(res, 404, schedules)
      var response = {
        scheduleCount: schedules.legnth,
        schedules: schedules.map((faq) => {
          return getScheduleAttributes(req, "GET", faq);
        })
      }

      utils.handleResponse(res, 200, response);
    }, (error) => {
      next(error);
    })
}

/**
 *4. Find schedule by their ID controller
 */
function findScheduleById(req, res, next) {
  console.log('GETTING STATION BY ID:');
  var scheduleId = req.params.id;
  //chech if schedule ObjectId is valid or not
  var validObjectId = mongoose.Types.ObjectId.isValid(scheduleId);

  if (validObjectId) {
    ScheduleDal.findById(scheduleId)
      .then(schedule => {
        if (schedule) {
          var token = req.token;
          var response = getScheduleAttributes(req, "GET", schedule);
          //set header
          //console.log("token",token);
          // res.header("x-auth",token);
          // res.rediret("http://localhost:5000/schedules/"+scheduleId)
          return utils.handleResponse(res, 200, response);
        }
        //else
        return utils.handleResponse(res, 404, schedule);
      }, (error) => {
        next(error);
      })

  } else {
    res.status(400).send({
      "message": "Schedule Id is not valid"
    });
  }
}

function getScheduleByCustomId(req, res, next) {
  debug('GETTIGN STATION')
  var customid = req.params.cid;
  //console.log("my schedule id : " + customid);

  ScheduleDal.findByCustomId(customid)
    .then((schedule) => {
      if (!schedule) return res.status(404).send({
        "message": "No muching schedule found"
      });
      //console.log(schedule)
      return res.send(getScheduleAttributes(req, "GET", schedule));
    }, function(err) {
      next(err);
      //res.status(500).send({"message":"unable to find schedule"});
    });
}
/**
 *5. Update schedule Info Controller
 */
function updateScheduleInfo(req, res, next) {
  var createdBy = req.user._id;
  console.log("createdBy",createdBy)
  var modifiedAt = new Date();
  req.body.modifiedAt = modifiedAt;

  var scheduleData = _.pick(req.body, ["createdBy","trainId", "stationId", "userId", "arrivalTime", "departureTime"]);
  console.log("scheduleData", scheduleData)
  var updates = {
    createdBy:createdBy,
    trainId: req.body.trainId,
    stationId: req.body.stationId,
    arrivalTime: req.body.arrivalTime,
    departureTime: req.body.departureTime,
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

  ScheduleDal.update(query, setUpdates, updateOptions)
    .then(updatedschedule => {
      //no content found
      if (!updatedschedule)
        //use 204 instead of 404 for update operation if the document to be updates
        //didn't exist
        return res.status(404).send({
          "Message": "No content found to update"
        });
      res.send(getScheduleAttributes(req, "PUT", updatedschedule));
    }, function(err) {
      res.status(500).json(err);
    })



}
/**
 *6. Delete schedule Controller
 */
function deleteScheduleById(req, res, next) {
  var query = {
    _id: req.params.id
  };

  ScheduleDal.delete(query)
    .then(schedule => {
      if (!schedule || schedule === 404)
        return utils.handleResponse(res, 404, schedule);
      //else
      utils.handleResponse(res, 200, {
        "message": "succesfully removed",
        schedule
      })
    }, error => {
      next(error);
    })

}
/**
 *7. Get collection paginate
 */
function findScheduleByPagination(req, res, next) {
  debug('GET STATION COLLECTION BY PAGINATION');

  var query = req.query.query || {};
  var qs = req.query;

  ScheduleDal.paginate(query, qs)
    .then(function(docs) {
      if (docs) return res.json(docs);
    })
    .catch(error => {
      next(error);
    });
}

/**
 *II. Export schedule Controllers
 */
module.exports = {
  create: createSchedule,
  searchByName: searchScheduleByName,
  findAll: findAllSchedule,
  findById: findScheduleById,
  update: updateScheduleInfo,
  delete: deleteScheduleById,
  paginate: findScheduleByPagination,
  findByCustomId: getScheduleByCustomId
}
