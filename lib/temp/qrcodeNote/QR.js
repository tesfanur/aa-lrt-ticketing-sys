var qr = require('qr-image');
var fs =require('fs');
var ticket ={
    "_id": "5a8b59e87474781c44dfc65d",
    "route": "EW",
    "passengerId": {
        "_id": "5a815c1b205e0c14546476f6",
        "email": "tesfaye.belachew@gmail.com",
        "phone": "251-917-123456"
    },
    "from": {
        "_id": "5a7dfbfd06f32e2cb8deda25",
        "stationId": 16,
        "name": "Management Institute",
        "route": "EW"
    },
    "to": {
        "_id": "5a83e726abe26a1a1c0be0c8",
        "stationId": 120,
        "name": "St Lideta",
        "route": "EW"
    },
    "price": 3.92,
    "__v": 0,
    "modifiedAt": "2018-02-19T23:12:40.415Z",
    "createdAt": "2018-02-19T23:12:40.415Z",
    "status": "unused",
    "type": "for adult",
    "id": "SkX--C9PG"
};
ticket=JSON.stringify(ticket)
//var qr_svg = qr.image('Tesfaye Belachew Abebe!\nTicket Price : 10 birr', { type: 'png' });
var qr_svg = qr.image(ticket, { type: 'png' });

qr_svg.pipe(fs.createWriteStream('ticket.png'));

 //var svg_string = qr.imageSync('I love QR!', { type: 'svg' });
//===================
// var options = {
//     ZXingLocation: "/path",
//     try_harder: false,
//   multi: false
// };
// var qrdecoder = require('node-zxing')(options);
// var path = "./i_love_qr.png";
// qrdecoder.decode(path,
//   function(err, out) {
//     console.log(err,out);
//   }
// );
    //
    // const ZebraCrossing = require('zebra-crossing');
    // var opts={
    //   // Use the TRY_HARDER hint
    //   tryHarder: true,
    //   // Image is a direct monochrome image of a barcode, not a photo
    //   pureBarcode: true,
    //   // Only read retail barcodes (EAN and UPC)
    //   productsOnly: true,
    //   // Find multiple barcodes in the same image
    //   multi: true,
    //   // Crop by the specified pixel values before searching for barcodes
    //   crop: { left: 10, top: 20, width: 30, height: 40 },
    //   // Only search for the specified barcode formats
    //   // See ZebraCrossing.FORMAT for supported formats
    //   possibleFormats: [ 'AZTEC', 'QR_CODE' ],
    // }
    // ZebraCrossing.read(fs.readFileSync('i_love_qr.png'), opts)
    // 	.then((data) => console.log(data))
    //   .catch((err) => console.log(err));
//===============================
      // var QrCode = require('qrcode-reader');
      // var qr = new QrCode();
      //
      // qr.callback = function(error, result) {
      //   if(error) {
      //     console.log(error)
      //     return;
      //   }
      //   console.log(result)
      // }
      //
      // var Jimp = require("jimp");
      // var buffer = fs.readFileSync(__dirname + '/i_love_qr.png');
      // Jimp.read(buffer, function(err, image) {
      //     if (err) {
      //         console.error(err);
      //         // TODO handle error
      //     }
      //     var qr = new QrCode();
      //     qr.callback = function(err, value) {
      //         if (err) {
      //             console.error(err);
      //             // TODO handle error
      //         }
      //         console.log(value.result);
      //         console.log(value);
      //     };
      //     qr.decode('image.bitmap');
      // });
