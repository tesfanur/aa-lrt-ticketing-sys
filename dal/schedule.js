/**
 *Load module dependecies
 */
const debug = require('debug')('api:schedule-dal');
const q = require('q');

const ScheduleModel = require('../models/schedule');
const logMsg = require('../lib/utils').showMsg;

const ScheduleDalModule = (function(ScheduleModel) {
  'use strict';
  /**
   *1. Create ScheduleModel
   */
  function createSchedule(data) {
    debug('CREATING A NEW SCHEDULE');
    //save fare info
    let schedule = new ScheduleModel(data);
    return new Promise((resolve, reject) => {
      schedule.save()
        .then((result) => {
          resolve(result);
        }, (err) => {
          return reject(err);
        });
    });

  }

  /**
   *2. Get all ScheduleModels
   */
  function getAllSchedules(query) {
    debug('getting all schedule collection');
    var defferd = q.defer();
    ScheduleModel.find(query)
      //.select("scheduleId name userId longitude longitude createdAt")
      .populate('userId')
      .sort({
        createdAt: -1
      })
      .exec()
      .then((schedules) => {
        defferd.resolve(schedules);
      }, (err) => {
        defferd.reject(err);
      });

    return defferd.promise;
  }
  /**
   *3.Get Schedule by Id ?
   */
  function getScheduleById(id) {
    debug('GETTING STATION', id)
    console.log("my schedule id : " + id);

    return new Promise((resolve, reject) => {
      ScheduleModel.findById(id)
        .populate("userId")
        .exec()
        .then((result) => {
          return resolve(result);
        }, (err) => {
          reject(err);
        });
    })
  }
  /**
   *find schedule by custom id
   **/
  function getScheduleByCustomId(customid) {
    debug('GETTIGN STATION', customid)
    //console.log("schedule customid : " + customid);

    return new Promise((resolve, reject) => {
      ScheduleModel.findOne({
          scheduleId: customid
        })
        .populate("userId")
        .exec()
        .then((result) => {
          resolve(result);
        }, function(err) {
          reject(err);
        });

    });

  }

  /**
   *3. Search schedule by query instead of req.body
   */
  function searchScheduleByName(name) {
    var filterdSchedules = [];
    return new Promise((resolve, reject) => {
      ScheduleModel.find({})
        .populate("question.askedBy")
        .populate("answer.answerdBy")
        .exec()
        .then(function(result) {
          //if not schedule found return 404
          if (!result) return resolve(404);
          filterdSchedules = _.filter(result, schedule => {
            return schedule.name
              .toLowerCase()
              .indexOf(name) > -1;
          })
          if (filterdSchedules.length === 0) return resolve(404);
          resolve(filterdSchedules);
        }, function(err) {
          reject(err)
        })
    });
  }

  function scheduleExist(scheduleId) {
    debug('CHECKING STATION EXISTENCE');
    logMsg({
      scheduleId: scheduleId
    });
    var defferd = q.defer();
    ScheduleModel.findOne({
        scheduleId: scheduleId
      })
      .exec()
      .then((err, result) => {
        if (err) return defferd.reject(err);
        //if schedule doesn't exist
        //if(!result) return defferd.resolve(false);
        defferd.resolve(result);
      })

    return defferd.promise;

  }

  function scheduleExist(scheduleId) {
    debug('CHECKING STATION EXISTENCE');
    logMsg({
      scheduleId: scheduleId
    });

    return new Promise((resolve, reject) => {
      ScheduleModel.findOne({
          scheduleId: scheduleId
        })
        .exec()
        .then((result) => {
          //if schedule doesn't exist
          if (!result) return resolve(true);
          resolve(400); //bad request
        }, (err) => {
          reject(err);
        })
    });
  }

  /**
   *3.Update Schedule
   */
  function updateSchedule(query, update, opts) {
    debug('updating a schedule', query);

    return new Promise((resolve, reject) => {
      ScheduleModel.findOneAndUpdate(query, update, opts)
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
   *4.Remove Schedule
   */
  function deleteSchedule(query) {
    debug('DELETING STATION');
    var defferd = q.defer();
    return new Promise((resolve, reject) => {
      ScheduleModel.findOneAndRemove(query)
        .then((result) => {
          //if(!result) return resolve(404);
          resolve(result)
        }, err => {
          reject(err);
        });
      //return defferd.promise;
    })


  }

  /**
   *5.Get schedule by pagination
   */
  function getScheduleByPagination(query, qs) {
    debug('fetching a collection of schedules');
    var defferd = q.defer();
    var opts = {
      sort: qs.sort || {},
      page: qs.page || 1,
      limit: qs.per_page || 10
    };
    ScheduleModel.paginate(query, opts)
      .then((schedules) => {
        if (!schedules)
          return defferd.reject("Schedule not found");

        var response = {
          page: schedules.page,
          total_docs: schedules.total,
          total_pages: schedules.pages,
          per_page: schedules.limit,
          docs: schedules.docs
        };
        return defferd.resolve(response);
      })
      .catch(err => {
        defferd.reject(err);
      });
    return defferd.promise;
  }

  //
  /**
   *6.return ScheduleDalModule public APIs
   */
  return {
    create: createSchedule,
    findAll: getAllSchedules,
    findById: getScheduleById,
    update: updateSchedule,
    delete: deleteSchedule,
    paginate: getScheduleByPagination,
    scheduleExist: scheduleExist,
    findByCustomId: getScheduleByCustomId,
    searchByName: searchScheduleByName
  };
}(ScheduleModel));

module.exports = ScheduleDalModule;