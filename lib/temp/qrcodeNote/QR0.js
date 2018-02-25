const fs =require('fs');
const qr = require('qr-image');
const CryptoJS = require("crypto-js");

//ticket object to be converted into qr code
//step to convert
/**
*1. get/generate ticket info/object
*2. convert into string
*3. encrypt the text by cryptojs AES encryption feature
*4. convert the encrypted ticket into qr code/image
*5. send the qr code/image to the user
*6. to check the validity of the qr coded ticket
*6.1 decode the qr image into its equivalent text
*6.2 then decrypt the result into its equivalent original
*    ticket info using cryptojs decryption feature
*6.3 compare the result with the data recorded inside the db
*/

        // var data = [{"firstName": "Tesfaye"}, {"lastName": "Belachew"}]
        //
        // // Encrypt
        // var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), 'secret key 123');
        //
        // // Decrypt
        // var bytes  = CryptoJS.AES.decrypt(ciphertext.toString(), 'secret key 123');
        // var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        //
        // console.log("encryptedData",ciphertext.toString());
        // console.log("decryptedData",decryptedData);
/**
*
*
**********/
var ticket ="5a8b59e87474781c44dfc65d_tesfaye-belachew_mango_sibela_tesyaze";
var orgTicket ={
    "_id": "5a8b59e87474781c44dfc65d",
    "route": "EW",
    "passengerId": {
        "_id": "5a815c1b205e0c14546476f6",
        "email": "evana.mangato@gmail.com",
        "phone": "251-917-088845",
        "name" :"Tesfaye Belachew"
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

//data =ticket;

// Encrypt
ciphertext = CryptoJS.AES.encrypt(JSON.stringify(orgTicket), 'secret key 123');

// Decrypt
  // bytes  = CryptoJS.AES.decrypt(ciphertext.toString(), 'secret key 123');
  // decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

// console.log("encryptedData",ciphertext.toString());
// console.log("decryptedData",decryptedData);
//ticket=JSON.stringify(ticket)
//console.log(ticket)
//var qr_svg = qr.image('Tesfaye Belachew Abebe!\nTicket Price : 10 birr', { type: 'png' });
var qr_svg = qr.image(ciphertext.toString(), { type: 'png' });
qr_svg.pipe(fs.createWriteStream('mango.png'));
