/**
*Load module dependecies
*/
const _       = require('lodash');
const q       = require('q');
const debug   = require('debug')('api:faq-dal');
const moment  = require('moment');
/**
*Load custom module dependecies
*/
const FaqDalModule = require('../models/faq');
const StationDal   = require('../dal/station');//???
const logMsg = require('../lib/utils').showMsg;
const errorHandler = require('../lib/utils').errorHandler;

var returnFields = FaqDalModule.whitelist;
// var population = [{
//   path: 'user',
//   select: User.whitelist
// }];

const FaqDalModule = (function(FaqDalModule){
  'use strict';
/**
*1. Create Fare DATA ACCESS LAYER
*/
  function createFare(data){
     debug('CREATING A NEW FARE');

     var defferd = q.defer();
     //save faq info
      let faq = new FaqDalModule(data);
             faq.save()
                 .then(faqData => {
                    defferd.resolve(faqData);
                  })
                .catch(err =>
                    {
                      defferd.reject(err);
                  });
          return defferd.promise;

 }
 /**
 *2. DATA ACCESS LAYER to check whether faq documet Exists or not b/n two stations
 */
 function faqExist(from, to){
    debug('CREATING A NEW FARE');

    logMsg({from:from, to:to});
    var defferd = q.defer();
    //console.log("log data ",{from: from, to:to});
    FaqDalModule.findOne({from:from, to:to})
             .exec()
             .then(result => {
               //faq
               if(result){
                   logMsg("This record already exists.");
                     //faq doesn't exist
                     defferd.resolve(true);
                    }
                    else{
                      //faq exists
                    defferd.resolve(false);
                    }
             }).catch(err => {defferd.reject(err);});

         return defferd.promise;

}
/**
*3. DATA ACCESS LAYER for setting faq amount
*/
function setFareAmount(from, to, faq){
   debug('CREATING A NEW FARE');

   logMsg({from:from, to:to, faq:faq});
   var defferd = q.defer();
   FaqDalModule.findOne({from:from, to:to})
            .exec()
            .then(result => {
              if(!result)  return defferd.reject();
                result.faq =faq;
                result.userId =req.user._id;
                result.save()
                    .then(updatedFare => {
                      if(updatedFare) return defferd.resolve(updatedFare);
                    }).catch(err => {defferd.reject(err);});
            })
            .catch(err => {defferd.reject(err);});

        return defferd.promise;

}
/**
*4. DATA ACCESS LAYER for setting distance b/n stations
*/
function setDistance(from, to, distance){
   debug('CREATING A NEW FARE');

   logMsg({from:from, to:to, faq:faq});
   var defferd = q.defer();
   FaqDalModule.findOne({from:from, to:to})
            .exec()
            .then(result => {
              if(!result)  return defferd.reject();
                result.distance =distance;
                result.userId =req.user._id;
                result.save()
                    .then(updatedFare => {
                      if(updatedFare) return defferd.resolve(updatedFare);
                    }).catch(err => {defferd.reject(err);});
            })
            .catch(err => {defferd.reject(err);});

        return defferd.promise;

}
/**
*5. DATA ACCESS LAYER to get all stations
*/
function getAllFares(query){
    debug('GETTING ALL FARE COLLECTION');
    var defferd =q.defer();
 FaqDalModule.find(query,returnFields)
          .populate('from',"name route")
          .populate('to',"name route")
          .populate('userId',"email")
          .sort({createdAt:-1})
          .exec()
          .then(faqs => {
            var publicFares ={};
            //publicFares = faqs[0];
            publicFares.from = faqs[0].from.name;
            publicFares.to = faqs[0].to.name;
            publicFares.distance = faqs[0].distance;
            publicFares.faq = faqs[0].faq;
             if(faqs) return defferd.resolve(faqs);
                defferd.resolve("No faqs document available");
              })
          .catch((err)=> {
               defferd.reject(err)});
    return defferd.promise;

}
/**
*6. DATA ACCESS LAYER to Get Fare document by Id
*/
function getFareById(faqId){
    debug('getting a faq', faqId);
    var defferd = q.defer();
 FaqDalModule.findOne({_id:faqId})
          .exec()
          .then(faq => {
             if(faq) return defferd.resolve(faq);;
               //no error
                if(faq) return defferd.resolve(faq);
                return defferd.resolve(null);
              })
          .catch(err => { defferd.reject(err)});
    return defferd.promise;
}
/**
*7. DATA ACCESS LAYER to update Fare document info
*/
function updateFare(query, update, cb){
    debug('updating a faq', query);
    var opts = {
        'new': true
    };
 FaqDalModule.findOneAndUpdate(query, update, opts)
        .exec()
        .then(faq => cb(null, faq || {}))
        .catch( err   => {if(err) return cb(err);});
}
/**
*8. DATA ACCESS LAYER to remove Fare document
*/
function deleteFare(query, cb){
    debug('deleting a faq');
 FaqDalModule.findOne(query)
        .exec()
        .then(function (faq){
            if(!faq) {
              return cb(null, {faq : faq,
                "message":"Fare not found"
            })}
              ////cb(null, faq);

            faq.remove((err, data)=>{
                if(err) return cb(err)
                cb(null, data);})
                ;})
         .catch(err=>{return cb(err)} );
}
/**
*9. DATA ACCESS LAYER to Get faq documents by pagination
*/
function getFareByPagination(query, qs, cb){
    debug('fetching a collection of faqs');

    var opts = {
        sort: qs.sort || {},
        page: qs.page || 1,
        limit: qs.per_page || 10
    };

    FaqDalModule.paginate(query, opts, (err, data)=>{
        if(err) return cb(err,null);

        var response = {
            page: data.page,
            total_docs: data.total,
            total_pages: data.pages,
            per_page: data.limit,
            docs: data.docs
        };

        cb(null, response);
    });
}
/**
*10.Get Fare by Id  cb({error},{result}) ???
*/
function getFareByIdAndPopulate(query, cb){
 FaqDalModule.findOne(query,{_id:0})
          .populate('from',["name"])
          .populate('to',["name"])
          .exec()
          .then(faq => {
             if(!faq) return cb({"error": "No record found"},null);
               //no error
              cb(null, faq);})
          .catch(err => {
              return cb(err,null)});
}

//Aggregation function
//https://gist.github.com/kdelemme/9659364
function getTotalPrice() {
    return new Promise((resolve, reject)=>{
      FaqDalModule.aggregate([
          { $group: {
              _id: "$route",
              totalPrice: { $sum: "$faq"  }
          }}
      ], function (err, result) {
          if (err) {
              console.log(err);
              return reject(err)
          }
          console.log(result);
          resolve(result)
      });

    });

}
function getCompleteFareInfo(route,from,to) {
  console.log("route = "+route + " from = " + from +" to = "+ to)

    return new Promise((resolve, reject)=>{
      FaqDalModule.aggregate([

        {
      $lookup:
        {
          from: "stations",
          localField: "from",
          foreignField: "_id",
          as: "from"
        }

   },{
            $lookup:
        {
          from: "stations",
          localField: "to",
          foreignField: "_id",
          as: "to"
        }
       },
        {
            $lookup:
        {
          from: "users",
          localField: "userId",
          foreignField: "_id",
          as: "passenger"
        }
       },

        { $unwind : "$from" },
        { $unwind : "$to" },

          {$project:
            {"source":"$from",
            "destination":"$to",
            "passenger":"$userId",
            "distance":"$distance",
            "ticketPrice":"$faq"}},

            {$match:{"source.route":route,
                    "source.stationId":{"$gte":from},
                    "destination.stationId":{"$lte":to}
             }
            }
            //{$match:{"source.route":"EW","source.stationId":{"$gte":115,"$lte":120}}}
        // {"$limit":3}
      ]).exec(function (err, result) {
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
function generateTicketInfo(route, from,to,user){

  return new Promise((resolve,reject)=>{

  StationDal.findByCustomId(parseInt(from))
                   .then(sourceStation=>{
                      return sourceStation;
                   })
                   .then((sourceStation)=>{
                    StationDal.findByCustomId(parseInt(to))
                              .then(destinationStation => {
                          //=================================================
                          var source =from;
                          var destination =to;
                          //swap start and end destinationStation
                          //for the following condition
                          //for ticket calclation
                          if((from-to)>0){
                            source=to;
                            destination=from;
                          }

              getCompleteFareInfo(route,
                                 source,
                                 destination
                                 )
                                .then((info)=>{
                                if(info){
                                   var totalDistance=0;
                                   var totalPrice=0;
                                   var counter =0;
                                    //calculate ticket price
                                info.forEach(function(station){
                                     totalDistance+=station.distance;
                                     totalPrice+=station.ticketPrice;});

                                  // console.log("travel strats at "+ from + " and ends at " +to);
                                  // console.log("total distance =",totalDistance);
                                  // console.log("paid =",totalPrice.toFixed(2)+"ETB");
                                  //var createdAt = moment( new Date(), 'MM-DD-YYYY HH:mm:ss',true).format("YYYY-MMM-DDD HH:mm:ss");
                                  var createdAt =moment(new Date()).format("DD-MMM-YYYY hh:mm A");

                                  var ticketInfo ={
                                    //fetch user info by passing as arguiment
                                    passengerId: user._id,
                                    passenger: user.email,
                                    phone:user.phone,
                                    route:route,
                                    travel:{
                                    from :from,
                                    to: to},
                                    source:sourceStation.name,
                                    destination:destinationStation.name,
                                    source_id:sourceStation._id,
                                    destination_id:destinationStation._id,
                                    paid: totalPrice.toFixed(2),
                                    status: "unused",
                                    boughtAt : createdAt};
                                    return resolve(ticketInfo);
                                }//end of if block
                                 resolve(400);
                                }, err=>{
                                  reject(err)
                                })

                          //=================================================
                   });
                 })
                   .catch(err=> {
                     reject(err);
                   });
          });//end of promise
}
/**
*11.return FaqDalModule public APIs
*/
return {
create : createFare,
getAll : getAllFares,
getById : getFareById,
update : updateFare,
delete : deleteFare,
paginate : getFareByPagination,
findAndPopulate :getFareByIdAndPopulate,
faqExist :faqExist,
setFareAmount : setFareAmount,
getTotalPrice:getTotalPrice,
completeInfo:getCompleteFareInfo,
generateTicket:generateTicketInfo

};

}(FaqDalModule));

module.exports= FaqDalModule;
