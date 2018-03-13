/**
 *Load module dependecies
 */
const _ = require('lodash');
const q = require('q');
const debug = require('debug')('api:fare-dal');
const moment = require('moment');
/**
 *Load custom module dependecies
 */
const FareModel = require('../models/fare');
const _FareModel = require('../models/_fare');
const StationDal = require('../dal/station');
const logMsg = require('../lib/utils').showMsg;
const utils = require('../lib/utils');

const fares     = require('../lib/fares');
console.log(typeof stations)

_FareModel.collection.insert(fares, (error, docs)=> {
    if (error) {
    return console.log("Unable to insert stations")
    } else {
        console.info('%d fares were successfully stored.', docs.length);
    }
});

const FareDalModule = (function(FareModel) {
  'use strict';
  /**
   *1. Create Fare DATA ACCESS LAYER
   */
  function createFare(data) {
    debug('CREATING A NEW FARE');

    var defferd = q.defer();
    //save fare info
    let fare = new FareModel(data);
    fare.save()
      .then(fareData => {
        defferd.resolve(fareData);
      })
      .catch(err => {
        defferd.reject(err);
      });
    return defferd.promise;

  }
  /**
   *2. DATA ACCESS LAYER to check whether fare documet Exists or not b/n two stations
   */
  function fareExist(from, to) {
    debug('CREATING A NEW FARE');

    logMsg({
      from: from,
      to: to
    });
    var defferd = q.defer();
    //console.log("log data ",{from: from, to:to});
    FareModel.findOne({
        from: from,
        to: to
      })
      .exec()
      .then(result => {
        //fare
        if (result) {
          logMsg("This record already exists.");
          //fare doesn't exist
          defferd.resolve(true);
        } else {
          //fare exists
          defferd.resolve(false);
        }
      }).catch(err => {
        defferd.reject(err);
      });

    return defferd.promise;

  }
  /**
   *3. DATA ACCESS LAYER for setting fare amount
   */
  function setFareAmount(from, to, fare) {
    debug('CREATING A NEW FARE');

    logMsg({
      from: from,
      to: to,
      fare: fare
    });
    var defferd = q.defer();
    FareModel.findOne({
        from: from,
        to: to
      })
      .exec()
      .then(result => {
        if (!result) return defferd.reject();
        result.fare = fare;
        result.userId = req.user._id;
        result.save()
          .then(updatedFare => {
            if (updatedFare) return defferd.resolve(updatedFare);
          }).catch(err => {
            defferd.reject(err);
          });
      })
      .catch(err => {
        defferd.reject(err);
      });

    return defferd.promise;

  }
  /**
   *4. DATA ACCESS LAYER for setting distance b/n stations
   */
  function setDistance(from, to, distance) {
    debug('CREATING A NEW FARE');

    logMsg({
      from: from,
      to: to,
      fare: fare
    });
    var defferd = q.defer();
    FareModel.findOne({
        from: from,
        to: to
      })
      .exec()
      .then(result => {
        if (!result) return defferd.reject();
        result.distance = distance;
        result.userId = req.user._id;
        result.save()
          .then(updatedFare => {
            if (updatedFare) return defferd.resolve(updatedFare);
          }).catch(err => {
            defferd.reject(err);
          });
      })
      .catch(err => {
        defferd.reject(err);
      });

    return defferd.promise;

  }
  /**
   *5. DATA ACCESS LAYER to get all stations
   */
  function getAllFares(query) {
    debug('GETTING ALL FARE COLLECTION');
    var defferd = q.defer();
    FareModel.find(query)
      // .populate('from','name stationId route')
      // .populate('to','name stationId route')
      .populate('from')
      .populate('to')
      .populate('userId', 'email phone userType')
      .sort({
        createdAt: -1
      })
      .exec()
      .then(fares => {
        var publicFares = {};
        //publicFares = fares[0];
        publicFares.from = fares[0].from.name;
        publicFares.to = fares[0].to.name;
        publicFares.distance = fares[0].distance;
        publicFares.fare = fares[0].fare;
        if (fares) return defferd.resolve(fares);
        defferd.resolve("No fares document available");
      })
      .catch((err) => {
        defferd.reject(err)
      });
    return defferd.promise;

  }
  /**
   *6. DATA ACCESS LAYER to Get Fare document by Id
   */
  function getFareById(fareId) {
    debug('getting a fare', fareId);
    var defferd = q.defer();
    FareModel.findOne({
        _id: fareId
      })
      .populate("from", "name")
      .populate("to", "name")
      .populate("userId", "email phone")
      .exec()
      .then(fare => {
        if (fare) return defferd.resolve(fare);;
        //no error
        if (fare) return defferd.resolve(fare);
        return defferd.resolve(null);
      })
      .catch(err => {
        defferd.reject(err)
      });
    return defferd.promise;
  }
  /**
   *7. DATA ACCESS LAYER to update Fare document info
   */

  function updateFare(query, update, opts) {
    debug('updating a faq', query);

    return new Promise((resolve, reject) => {
      FareModel.findOneAndUpdate(query, update, opts)
        .exec()
        .then((result) => {
          resolve(result);
        }, (err) => {
          reject(err)
        });
    });
  }
  /**
   *8. DATA ACCESS LAYER to remove Fare document
   */
  function deleteFare(query) {
    debug('DELETING FAQ');
    return new Promise((resolve, reject) => {
      FareModel.findOneAndRemove(query)
        .then((result) => {
          resolve(result)
        }, err => {
          reject(err);
        });
    })
  }
  /**
   *9. DATA ACCESS LAYER to Get fare documents by pagination
   */
  function getFareByPagination(query, queryParams) {
    debug('FETCHING A COLLECTION OF FAQS');
    var defferd = q.defer();
    var opts = {
      sort: queryParams.sort || {},
      page: queryParams.page || 1,
      limit: queryParams.per_page || 10
    };
    FareModel.paginate(query, opts)
      .then((faqs) => {
        if (!faqs)
          return defferd.reject("Faq not found");

        var response = {
          page: faqs.page,
          total_docs: faqs.total,
          total_pages: faqs.pages,
          per_page: faqs.limit,
          docs: faqs.docs
        };
        return defferd.resolve(response);
      })
      .catch(err => {
        defferd.reject(err);
      });
    return defferd.promise;
  }

  /**
   *10.Get Fare by Id  cb({error},{result}) ???
   */
  function getFareByIdAndPopulate(query) {
    return new Promise((resolve, reject) => {
      FareModel.findOne(query, {
          _id: 0
        })
        .populate('from', "name")
        .populate('to', "name")
        .populate('userId', "email phone")
        .exec()
        .then(fare => {
            if (!fare) return resolve(404);
            resolve(fare);
          },
          err => {
            res.status(500).send({
              "error": err
            })
          }
        );
    })

  }

  //Aggregation function
  //https://gist.github.com/kdelemme/9659364
  function getTotalPrice() {
    return new Promise((resolve, reject) => {
      FareModel.aggregate([{
        $group: {
          _id: "$route",
          totalPrice: {
            $sum: "$fare"
          }
        }
      }], function(err, result) {
        if (err) {
          console.log(err);
          return reject(err)
        }
        console.log(result);
        resolve(result)
      });

    });

  }

  function getCompleteFareInfo(route, from, to) {
    console.log("route = " + route + " from = " + from + " to = " + to)

    return new Promise((resolve, reject) => {
      FareModel.aggregate([

        {
          $lookup: {
            from: "stations",
            localField: "from",
            foreignField: "_id",
            as: "from"
          }

        }, {
          $lookup: {
            from: "stations",
            localField: "to",
            foreignField: "_id",
            as: "to"
          }
        }, {
          $lookup: {
            from: "users",
            localField: "userId",
            foreignField: "_id",
            as: "passenger"
          }
        },

        {
          $unwind: "$from"
        }, {
          $unwind: "$to"
        },

        {
          $project: {
            "source": "$from",
            "destination": "$to",
            "passenger": "$userId",
            "distance": "$distance",
            "ticketPrice": "$fare"
          }
        },

        {
          $match: {
            "source.route": route,
            "source.stationId": {
              "$gte": from
            },
            "destination.stationId": {
              "$lte": to
            }
          }
        }
        //{$match:{"source.route":"EW","source.stationId":{"$gte":115,"$lte":120}}}
        // {"$limit":3}
      ]).exec(function(err, result) {
        if (err) {
          //console.log(err);
          return reject(err)
        }
        //console.log(result);
        resolve(result)
      });

    });

  }
  /**
   *Generate Ticket Infomation
   */
  //refactor the following code. Hint use the following input Object
  //function generateTicketInfo(ticketInput){
  //ticketInput.route, ticketInput.from, ticketInput.to,ticketInput.user
  function generateTicketInfo(route, from, to, user) {

    return new Promise((resolve, reject) => {

      StationDal.findByCustomId(parseInt(from))
        .then(sourceStation => {
          return sourceStation;
        })
        .then((sourceStation) => {
          StationDal.findByCustomId(parseInt(to))
            .then(destinationStation => {
              //=================================================
              var source = from;
              var destination = to;
              //swap start and end destinationStation
              //for the following condition
              //for ticket calclation
              if ((from - to) > 0) {
                source = to;
                destination = from;
              }
           //calculateTicketPrice(from,to);
              getCompleteFareInfo(route,
                  source,
                  destination
                )
                .then((info) => {
                  if (info) {
                    var totalDistance = 0;
                    var totalPrice = 0;
                    var counter = 0;
                    //calculate ticket price
                    info.forEach(function(station) {
                      counter++;
                      totalDistance += station.distance;
                      totalPrice += station.ticketPrice;
                    });
                    //console.log("counter", counter);

                    // console.log("travel strats at "+ from + " and ends at " +to);
                    // console.log("total distance =",totalDistance);
                    // console.log("paid =",totalPrice.toFixed(2)+"ETB");
                    //var createdAt = moment( new Date(), 'MM-DD-YYYY HH:mm:ss',true).format("YYYY-MMM-DDD HH:mm:ss");
                    var createdAt = moment(new Date()).format("DD-MMM-YYYY hh:mm A");
                    if(!calculateTicketPrice(counter)) return reject({message:"Invalid station range"})

                    var ticketInfo = {
                      //fetch user info by passing as arguiment
                      passengerId: user._id,
                      passenger: user.email,
                      phone: user.phone,
                      route: route,
                      travel: {
                        from: from,
                        to: to
                      },
                      source: sourceStation.name,
                      destination: destinationStation.name,
                      source_id: sourceStation._id,
                      destination_id: destinationStation._id,
                      paid: totalPrice.toFixed(2),
                      //existingPrice:calculateTicketPrice(counter).toFixed(2) +"ETB",
                      existingPrice:calculateTicketPrice(counter).toFixed(2),
                      status: "unused",
                      boughtAt: createdAt,

                    };
                    //console.log(ticketInfo)
                    return resolve(ticketInfo);
                  } //end of if block
                  resolve(400);
                }, err => {
                  reject(err)
                })

              //=================================================
            });
        })
        .catch(err => {
          reject(err);
        });
    }); //end of promise
  }
  function calculateTicketPrice(counter){
    var numOfStationsTravelled = Math.abs(counter);
  //console.log("numOfStationsTravelled",numOfStationsTravelled)
    if(numOfStationsTravelled>=1 && numOfStationsTravelled<=8)
    {
      return 2;
    }else if(numOfStationsTravelled>8 && numOfStationsTravelled<=16){
      return 4;
  }else if(numOfStationsTravelled>16 & numOfStationsTravelled<25){
    return 6;
  } else{
    return false;//invalid range
  }
}
  /**
   *11.return FareDalModule public APIs
   */
  return {
    create: createFare,
    getAll: getAllFares,
    getById: getFareById,
    update: updateFare,
    delete: deleteFare,
    paginate: getFareByPagination,
    findAndPopulate: getFareByIdAndPopulate,
    fareExist: fareExist,
    setFareAmount: setFareAmount,
    getTotalPrice: getTotalPrice,
    completeInfo: getCompleteFareInfo,
    generateTicket: generateTicketInfo

  };

}(FareModel));

module.exports = FareDalModule;
