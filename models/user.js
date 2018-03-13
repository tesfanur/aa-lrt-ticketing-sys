var
  mongoose = require('mongoose'),
  bcrypt = require('bcrypt'),
  validator = require('validator'),
  jwt = require('jsonwebtoken'),
  _ = require('lodash'),
  moment = require('moment'),
  paginator = require('mongoose-paginate'),
  cryptoJS = require("crypto-js"),
  config = require('../config/config'); //the higher the value the more secure hash it generates
//find all other function that are supported by mongoose model/Schema
//before you do from scratch
var Schema = mongoose.Schema;
/**
 *Usrers Schema
 */
var UserSchema = new Schema({
  email: {
    type: String,
    //required: 'Email is required',
    trim: true,
    minlength: 6,
    default:"noemail@nodomain.com"
    //unique: [true, "Email should be unique"],
    // validate: {
    //   isAsync: true,
    //   validator: validator.isEmail,
    //   message: '{VALUE} is not a valid email'
    // }
  },
  password: {
    type: String,
    require: true,
    minlength: 6
  },
  username: {
    type: String,
    require: true,
    unique: true,
    minlength: 6
  },
  phone: {
    type: String,
    //unique: true,
    trim: true,
    validate: {
      validator: function(v) {
        //return /\d{3}\d{3}\d{4}/.test(v);
        //+251912657147 or +2510912657147
        return /^\+[0-9]{10,13}$/.test(v);
      },
      message: '{VALUE} is not a valid phone number!'
    },
    required: [true, 'Uscser phone number required'],
    default:"+251000000000"
  },

  userType: {
    type: String,
    enum: ['passenger', 'admin'],
    default: 'passenger',
    required: true
  },
  tokens: [{
    access: {
      type: String,
      required: true
    },

    token: {
      type: String,
      required: true
    }
  }],

  createdAt: {
    type: Date,
    default: Date.now
  },

  modifiedAt: {
    type: Date,
    default: Date.now
  }
}, {
  usePushEach: true
});

UserSchema.statics.findByCredentials = function(userAccount, password) {
  var User = this;
  console.log(userAccount,password);

  return new Promise((resolve, reject) => {
    User.findOne({
      $or: [{
        email: userAccount
      }, {
        phone: userAccount
      }, {
        username: userAccount
      }]
    }).then((user) => {
      //console.log("user from model method", user)
      if (!user) return resolve(404);
      // Use bcrypt.compare to compare password and user.password
      bcrypt.compare(password, user.password, (err, compResult) => {
        if (compResult)   return resolve(user);
          console.log("user inside bcrypt", user)
          var message = new Error("Wrong password!");
          return reject({
              "query_result": "Wrong password!"
          });
      }
    ); //end of bycrypt

    }); //end of promise constructor

  }); //end of findOne userModel function
};

//=======================================
UserSchema.methods.toJSON = function() {

  this.createdAt = moment(this.createdAt).format("DD-MMM-YYYY hh:mm A");
  this.modifiedAt = moment(this.modifiedAt).format("DD-MMM-YYYY hh:mm A");
  var user = this;

  var userObject = user.toObject();

  return _.pick(userObject, ['_id', 'email', 'username', 'phone', 'userType', 'createdAt', 'modifiedAt']);
};

function generateHashedToken(token) {
  return cryptoJS.MD5(token).toString();
}

UserSchema.methods.generateAuthToken = function() {
  var _this = this;
  var access = 'auth';
  var token = jwt.sign({
      _id: _this._id.toHexString(),
      access
    },
    config.JWT_SECRET).toString();

  //token = generateHashedToken(token);

  _this.tokens.push({
    access,
    token
  });

  return _this.save().then(() => {
    //console.log(token);
    return token;
  });
};

UserSchema.methods.removeToken = function(token) {
  const user = this;

  return user.update({
    $pull: {
      tokens: {
        token
      }
    }
  });
};

UserSchema.statics.findByToken = function(token) {
  var User = this;
  var decoded;
  //console.log("token", token);
  try {
    decoded = jwt.verify(token, config.JWT_SECRET);
  } catch (e) {
    return Promise.reject();
  }

  return User.findOne({
    '_id': decoded._id,
    'tokens.token': token,
    'tokens.access': 'auth'
  });
};
UserSchema.pre('save', function(next) {
  var user = this;

  if (user.isModified('password')) {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(user.password, salt, (err, hash) => {
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

//Add mongoose paginate
UserSchema.plugin(paginator);

//export user model
//module.exports = mongoose.model('User', UserSchema);
var User = mongoose.model('User', UserSchema);
module.exports = User;
