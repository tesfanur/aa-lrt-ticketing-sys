var moment = require("moment");
// var date1 = new Date('December 17, 1995 03:24:00');
// console.log("time",moment(date1.getTime()).format("LLL"));
// var d = new Date();
// console.log(moment(d).format("hh:mm A"));
// console.log(moment({ hour:15, minute:10 }).format("hh:mm A"));
// console.log(moment().format("hh:mm A"));
function timeValidation(strTime) {
           var timeFormat = /^(?:1[0-2]|0?[0-9]):[0-5][0-9]\s?(?:am|pm)?/;
           return timeFormat.test(strTime);
       }
function checkTime(time) {
            //Assuming you are working in 24 hour time, 0 is not a valid
            var patt = new RegExp("^(2[0-3]|[01]?[0-9]):([0-5]?[0-9])$");
            var res = patt.test(time);
            return res;
        }


var time = "23:45";
console.log( checkTime(time));
 var newTime =moment(time, "hh:mm:ss");

 console.log("new time",newTime.format("hh:mm:ss A"));


 /**
  *Load module dependecies
  */ 
 const cryptoJS = require("crypto-js");

 //test cryptoJS md5 function
 //tesfaye belachew
 var token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTllYTVhNzFmOGU1YzAxODRmMDJiM2MiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTIwNDExMzkxfQ.1qelryWlkmUKVUPGsoNU6xs-J6Rmde-aCm_erJhWL_Q"
 var hashedToken = cryptoJS.MD5(token).toString();
 console.log("hashedToken",hashedToken);
