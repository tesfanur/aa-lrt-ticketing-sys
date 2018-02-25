
const jwt    = require('jsonwebtoken');
const config = require('../../config/config');
const unless = require('express-unless');
//use user dal instead of userModel
const userModel = require('../../models/user');

/**
*middleware for authentication
*/
module.exports = function (middlewareOptions) {
  var requireAuthentication = (req, res, next)=> {

    if (req.headers && req.headers.auth && req.headers.auth.split(' ')[0] === 'JWT') {
      jwt.verify(req.headers.auth.split(' ')[1], config.SECRET, (error, decoded) => {
        if (error) return res.status(401).json({"AUTHENTICATION":"AUTHORIZATION ERROR"})
        req.user = decoded;
        console.log('authenticated as ', decoded.username)
        next();
      })
    } else {
      return res.status(401).json({"AUTHENTICATION":"UNAUTHORIZED ACCESS"});
   }
}

  requireAuthentication.unless = unless;

  return requireAuthentication;
};


/**
*generate user token
*/
function generateUserToken(authType){
  if(!_.isString(authType)){
    return undefined;
  }
  try{
    var stringData = JSON.stringify({id:this._id, type:authType});
    var encryptData =cryptojs.AES.encrypt(stringData,config.SECRET);
    var token= jwt.sign({token: encryptData},config.SECRET);
    return token;
  }
  catch(e){
    return undefined;
  }
}
/**
* middleware for authentication
*/
    function requiresAuthentication (req, res, next){
      var token = req.get('Auth');
      userModel.findByToken(token)
               .then(function(user){
                req.user= user;
                next();
              },
            function(e){
              res.status(401).send();
            });

    }
/**
*Export all features reuired by other part of the code
*/

// module.exports = {
//   requireAuthentication : requireAuthentication,
//   generateToken         : generateUserToken
//   //requiresAuthentication:requiresAuthentication
// };
