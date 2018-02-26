const fs =require('fs');
const qr = require('qr-image');
const cryptoJS = require("crypto-js");

//ticket object to be converted into qr code
//step to convert
/**
*1. get/generate ticket info/object
*2. convert it into string
*3. encrypt the text by cryptojs AES encryption feature
*4. convert the encrypted ticket into qr code/image
*5. send the qr code/image to the user
*6. to check the validity of the qr coded ticket
*6.1 decode the qr image into its equivalent text
*6.2 then decrypt the result into its equivalent original
*    ticket info using cryptojs decryption feature
*6.3 compare the result with the data recorded inside the db
*/

var ticket ="5a8b59e87474781c44dfc65d_tesfaye-belachew_mango_sibela_tesyaze";
var orgTicket ={
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

// Encrypt
ciphertext = cryptoJS.AES.encrypt(JSON.stringify(orgTicket), 'secret key 123');
var qr_png = qr.image(ciphertext.toString(), { type: 'png' });
qr_png.pipe(fs.createWriteStream('ante.png'));
