const fs  = require('fs');
const QrCode = require('qrcode-reader');
const CryptoJS = require("crypto-js");
/**
*Method 1: Using qrcode-reader
*/
// var qr = new QrCode();
// //create custom qr code callback handler
// qr.callback = function(error, result) {
//   if(error) {
//     console.log(error)
//     return;
//   }
//   console.log(result)
// }
//
// /**
// *Image parser
// */
// var Jimp = require("jimp");
// var buffer = fs.readFileSync(__dirname + '/mango.png');
// Jimp.read(buffer, function(err, image) {
//     if (err) {
//         console.error(err);
//         // TODO handle error
//     }
//     var qr = new QrCode();
//     qr.callback = function(err, value) {
//         if (err) {
//             return console.error(err);
//             // TODO handle error
//         }
//         //console.log(value.result);
//         var  bytes  = CryptoJS.AES.decrypt(value.result, 'secret key 123');
//           decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
//           console.log("encryptedData",value.result+'\n');
//           console.log("decryptedData",decryptedData)
//
//         //console.log(value);//return the pattern used to decode the qr QrCode
//         //which is not needed for this purpose
//         //var obj = JSON.parse('{ "name":"John", "age":30, "city":"New York"}');
//         //use JSON pase function to convert the decoded qr text into json and cross
//         //check with the database ticket document
//     };
//     qr.decode(image.bitmap);
// });

/**
*Method 2: Using qrnode
*/

        // var qrnode = require('qrnode');
        //
        // // // From URL
        // // qrnode.detect("https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl=Teste", function(result){
        // //   console.log(result);
        // // });
        //
        // // From local File
        // qrnode.detect("mango.png", function(result){
        //   //if(err) return console.log(err);
        // var  bytes  = CryptoJS.AES.decrypt(result, 'secret key 123');
        //   decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        //   console.log("encryptedData",result+'\n');
        //   console.log("decryptedData",decryptedData)
        // });

    /**
    *Method 3: Using node-zxing is better for multi pattern alignment detection than
    *the previous two methods
    */

        var options = {}
        //         {
        //     ZXingLocation: "/path",
        //     try_harder: false,
        //   multi: false
        // }
        var qrdecoder = require('node-zxing')(options);
        var path = "./mango.png";
        qrdecoder.decode(path,
          function(err, decodedResult) {
            if(err) return console.log(err)
            var  bytes  = CryptoJS.AES.decrypt(decodedResult, 'secret key 123');
              decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
              console.log("encryptedData :",decodedResult+'\n');
              console.log("decryptedData :",decryptedData)
              //console.log(err,out);
          }
        );
