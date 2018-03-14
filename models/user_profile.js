var
  mongoose = require('mongoose')
_ = require('lodash'),
  paginator = require('mongoose-paginate'),
  config = require('../config/config'); //the higher the value the more secure hash it generates
//find all other function that are supported by mongoose model/Schema
//before you do from scratch
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;
/**
 *Usrers Schema
 */
var ProfileSchema = new Schema({
  userId: {
    type: ObjectId,
    required: true,
    ref: 'User'
  },
  username: {
    type: String,
    trim: true,
    unique: true,
    required: 'please enter your username'
  },
  firstName: {
    type: String,
    default: "",
    trim: true
  },
  lastName: {
    type: String,
    default: "",
    trim: true
  },
  address: {
    subcity: {
      type: String,
      default: "",
      trim: true
    },
    woreda: {
      type: String,
      default: "",
      trim: true
    },
    kebele: {
      type: String,
      default: "",
      trim: true
    },
    st: {
      type: String,
      default: "",
      trim: true
    }
  },

  createdAt: {
    type: Date,
    default: Date.now
  },

  modifiedAt: {
    type: Date,
    default: Date.now
  }
});
//=======================================
ProfileSchema.methods.toJSON = function() {
  var userProfile = this;
  var userProfileObject = userProfile.toObject();

  return _.pick(userProfileObject, ['_id', 'username', 'firstName',
    'lastName', 'address', 'userId'
  ]);
};

//Add mongoose paginate
ProfileSchema.plugin(paginator);

var UserProfile = mongoose.model('UserProfile', ProfileSchema);
module.exports = UserProfile;