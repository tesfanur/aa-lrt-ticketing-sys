var QrCode = require('qrcode-reader');
var fs  = require('fs');

var qr = new QrCode();
qr.callback = function(error, result) {
  if(error) {
    console.log(error)
    return;
  }
  console.log(result)
}


var Jimp = require("jimp");
var buffer = fs.readFileSync(__dirname + '/ticket.png');
Jimp.read(buffer, function(err, image) {
    if (err) {
        console.error(err);
        // TODO handle error
    }
    var qr = new QrCode();
    qr.callback = function(err, value) {
        if (err) {
            console.error(err);
            // TODO handle error
        }
        console.log(value.result);
        console.log(value);
    };
    qr.decode(image.bitmap);
});

// var ImageParser = require("image-parser");
// var buffer = fs.readFileSync(__dirname + '/image.png');
// var img = new ImageParser(img);
// img.parse(function(err) {
//     if (err) {
//         console.error(err);
//         // TODO handle error
//     }
//     var qr = new QrCode();
//     qr.callback = function(err, value) {
//         if (err) {
//             console.error(err);
//             // TODO handle error
//             return done(err);
//         }
//         console.log(value.result);
//         console.log(value);
//     };
//     qr.decode({width: img.width(), height: img.height()}, img._imgBuffer);
// });
