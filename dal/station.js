/**
 *Load module dependecies
 */
const debug = require('debug')('api:station-dal');
const q = require('q');

const StationModel = require('../models/station');
//const _StationModel = require('../models/station_');
const logMsg = require('../lib/utils').showMsg;
const stations = require('../lib/stations');



function populateStationCollection(createdBy,stations) {
return new Promise((resolve, reject)=>{
  StationModel.find({})
    .exec()
    .then(result => {

      if (!result || result.length===0) {
        console.log(typeof stations)
        //StationModel insert: array of fares
        StationModel.collection.insert(stations, (error, docs) => {
          if (error) {
            return console.log("Unable to insert stations")
          } else {
            console.info('%d stations were successfully stored.', docs.length);
          }
        });
      }
      var createdAt = new Date();
      var modifiedAt = new Date();
      console.log("createdBy",createdBy)

       //if(!result[0].createdAt){
      StationModel.collection.updateMany({}, {
        $set: {
          createdAt: createdAt,
          modifiedAt: modifiedAt,
          createdBy: createdBy
        }
      });
    //}

      resolve(result);

    }).catch(error => reject(error));

      })

}

const StationDalModule = (function(StationModel) {
  'use strict';
  /**
   *1. Create StationModel
   */
  function createStation(data) {
    debug('CREATING A NEW FARE');
    //save fare info
    let station = new StationModel(data);
    return new Promise((resolve, reject) => {
      StationModel.findOne({
          _id: data._id
        })
        .exec()
        .then(result => {
          if (!result) { //return resolve(400);//bad request to create station that already exists
            station.save()
              .then((result) => {
                resolve(result);
              }, function(err) {
                return reject(err);
              })
          } else {
            resolve(400)
          }
        });
    })

  }

  /**
   *2. Get all StationModels
   */
  function getAllStations(query) {
    debug('getting all station collection');
    var defferd = q.defer();
    StationModel.find(query)
      //.select("_id name userId longitude longitude createdAt")
      .populate('userId')
      .sort({
        createdAt: -1
      })
      .exec()
      .then((stations) => {
        defferd.resolve(stations);
      }, (err) => {
        defferd.reject(err);
      });

    return defferd.promise;
  }
  /**
   *3.Get Station by Id ?
   */
  function getStationById(id) {
    debug('GETTING STATION', id)
    console.log("my station id : " + id);

    return new Promise((resolve, reject) => {
      StationModel.findById(id)
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
   *find station by custom id
   **/
  function getStationByCustomId(customid) {
    debug('GETTIGN STATION', customid)
    //console.log("station customid : " + customid);

    return new Promise((resolve, reject) => {
      StationModel.findOne({
          _id: customid
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
   *3. Search station by query instead of req.body
   */
  function searchStationByName(name) {
    console.log("name", name)
    var filterdStations = [];
    return new Promise((resolve, reject) => {
      StationModel.find({})
        .populate("question.askedBy")
        .populate("answer.answerdBy")
        .exec()
        .then(function(result) {
          //if not station found return 404
          if (!result) return resolve(404);

          filterdStations = _.filter(result, station => {
            console.log("result", result)
            console.log("station", station)
            return station.nameEng
              .toLowerCase()
              .indexOf(name) > -1;
          })
          if (filterdStations.length === 0) return resolve(404);
          resolve(filterdStations);
        }, function(err) {
          reject(err)
        })
    });
  }

  function stationExist(id) {
    debug('CHECKING STATION EXISTENCE');
    logMsg({
      _id: id
    });
    var defferd = q.defer();
    StationModel.findOne({
        _id: id
      })
      .exec()
      .then((err, result) => {
        if (err) return defferd.reject(err);
        //if station doesn't exist
        //if(!result) return defferd.resolve(false);
        defferd.resolve(result);
      })

    return defferd.promise;

  }

  function stationExist(id) {
    debug('CHECKING STATION EXISTENCE');
    logMsg({
      _id: id
    });

    return new Promise((resolve, reject) => {
      StationModel.findOne({
          _id: id
        })
        .exec()
        .then((result) => {
          //if station doesn't exist
          if (!result) return resolve(true);
          resolve(400); //bad request
        }, (err) => {
          reject(err);
        })
    });
  }

  /**
   *3.Update Station
   */
  function updateStation(query, update, opts) {
    debug('updating a station', query);

    return new Promise((resolve, reject) => {
      StationModel.findOneAndUpdate(query, update, opts)
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
   *4.Remove Station
   */
  function deleteStation(query) {
    debug('DELETING STATION');
    var defferd = q.defer();
    return new Promise((resolve, reject) => {
      StationModel.findOneAndRemove(query)
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
   *5.Get station by pagination
   */
  function getStationByPagination(query, qs) {
    debug('fetching a collection of stations');
    var defferd = q.defer();
    var opts = {
      sort: qs.sort || {},
      page: Number(qs.page) || 1,
      limit: Number(qs.per_page) || 10
    };
    StationModel.paginate(query, opts)
      .then((stations) => {
        if (!stations)
          return defferd.reject("Station not found");

        var response = {
          page: stations.page,
          total_docs: stations.total,
          total_pages: stations.pages,
          per_page: stations.limit,
          docs: stations.docs
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
   *6.return StationDalModule public APIs
   */
  return {
    create: createStation,
    findAll: getAllStations,
    findById: getStationById,
    update: updateStation,
    delete: deleteStation,
    paginate: getStationByPagination,
    stationExist: stationExist,
    findByCustomId: getStationByCustomId,
    searchByName: searchStationByName,
    populate:populateStationCollection
  };
}(StationModel));

module.exports = StationDalModule;
