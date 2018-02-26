const cryptoJS = require("crypto-js");
const nodeZxing = require('node-zxing')

var qrdecoder = nodeZxing();
//find image path from database first
var imagePath = "./images/ante.png";

decodeQrCode(imagePath)
            .then(ticket=>{
              console.log(ticket);
            })
            .catch(err =>{
              console.log(err)
            })

function decodeQrCode(imagePath){
  //validate image path
  //invalid path....
  return new Promise((resolve, reject)=>{
    qrdecoder.decode(imagePath,
      function(err, decodedResult) {
        if(err) return reject("couldn't get image file from " +imagePath)
          var  bytes  = cryptoJS.AES.decrypt(decodedResult, 'secret key 123');
          var decryptedData = JSON.parse(bytes.toString(cryptoJS.enc.Utf8));
          var result ={
            encryptedTicket : decodedResult,
            decryptedTicket : decryptedData
          }

          resolve(result)
      }
    );

  })
}
