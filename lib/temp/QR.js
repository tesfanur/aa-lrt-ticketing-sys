var qr = require('qr-image');
var fs =require('fs');

var qr_svg = qr.image('Tesfaye Belachew Abebe!\nTicket Price : 10 birr', { type: 'png' });
qr_svg.pipe(fs.createWriteStream('i_love_qr.png'));

var svg_string = qr.imageSync('I love QR!', { type: 'svg' });
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
var QrCode = require('qrcode-reader');
var qr = new QrCode();

qr.callback = function(error, result) {
  if(error) {
    console.log(error)
    return;
  }
  console.log(result)
}

var Jimp = require("jimp");
var buffer = fs.readFileSync(__dirname + '/i_love_qr.png');
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
    qr.decode('image.bitmap');
});
