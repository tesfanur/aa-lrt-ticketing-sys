var
  mongoose = require('mongoose'),
  bcrypt = require('bcrypt'),
  validator = require('validator'),
  jwt = require('jsonwebtoken'),
  _ = require('lodash'),
  moment = require('moment'),
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
    required: 'Email is required',
    trim: true,
    minlength: 3,
    unique: [true, "Email should be unique"],
    validate: {
      isAsync: true,
      validator: validator.isEmail,
      message: '{VALUE} is not a valid email'
    }
  },

  password: {
    type: String,
    require: true,
    minlength: 6
  },
  phone: {
    type: String,
    unique: true,
    trim: true,
    validate: {
      validator: function(v) {
        return /\d{3}-\d{3}-\d{4}/.test(v);
      },
      message: '{VALUE} is not a valid phone number!'
    },
    required: [true, 'User phone number required']
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

UserSchema.statics.findByCredentials = function(email, password) {
  var User = this;

  return new Promise((resolve, reject) => {
    User.findOne({
      email
    }).then((user) => {
      if (!user) return resolve(404);
      // Use bcrypt.compare to compare password and user.password
      bcrypt.compare(password, user.password, (err, compResult) => {
        if (compResult) {
          resolve(user);
        } else {
          //console.log("user", user)
          reject("user not authenticated");
        }
      }); //end of bycrypt

    }); //end of promise constructor

  }); //end of findOne userModel function
};
//=======================================
UserSchema.methods.toJSON = function() {

  this.createdAt = moment(this.createdAt).format("DD-MMM-YYYY hh:mm A");
  this.modifiedAt = moment(this.modifiedAt).format("DD-MMM-YYYY hh:mm A");
  var user = this;

  var userObject = user.toObject();

  return _.pick(userObject, ['_id', 'email', 'phone', 'userType', 'createdAt', 'modifiedAt']);
};

UserSchema.methods.generateAuthToken = function() {
  var _this = this;
  var access = 'auth';
  var token = jwt.sign({
      _id: _this._id.toHexString(),
      access
    },
    config.JWT_SECRET).toString();

  _this.tokens.push({
    access,
    token
  });

  return _this.save().then(() => {
    //console.log(token);
    return token;
  });
};

UserSchema.statics.findByToken = function(token) {
  var User = this;
  var decoded;

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

//export user model
//module.exports = mongoose.model('User', UserSchema);
var User = mongoose.model('User', UserSchema);
module.exports = User;