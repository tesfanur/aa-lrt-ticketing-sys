const User   = require('../../models/user');
const unless = require('express-unless');


module.exports = (middlewareOptions) =>{
var authenticate = (req, res, next) => {
  var token = req.header('x-auth');

  User.findByToken(token).then((user) => {
    if (!user) {
      return Promise.reject();
    }

    req.user = user;
    req.token = token;
    req.session.user=user;

    next();
    
  }).catch((e) => {
    res.status(403).send({"message":"Access is forbidden",
  error:e});
  });
};

authenticate.unless = unless;

return authenticate;

}

//module.exports = {authenticate};

// var authenticate = (req, res, next) => {
//   var token = req.header('x-auth');
//
//   User.findByToken(token).then((user) => {
//     if (!user) {
//       return Promise.reject();
//     }
//
//     req.user = user;
//     req.token = token;
//     req.session.user=user;
//     next();
//   }).catch((e) => {
//     res.status(401).send();
//   });
// };
//
// module.exports = {authenticate};
