var
mongoose  = require('mongoose')
_         = require('lodash'),
config    = require('../config/config');//the higher the value the more secure hash it generates
 //find all other function that are supported by mongoose model/Schema
//before you do from scratch
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;
/**
*Usrers Schema
*/
var UserSchema = new Schema({
  userId : {type: ObjectId, required: true, ref:'User'},
  username: {type: String,
      trim: true,
      required: 'please enter your username'
    },
    firstName: {type: String,
      trim    : true},
    lastName: {type: String,
      trim    : true
    },
    createdAt : {type:Date,
       default : Date.now
     },

    modifiedAt: {type:Date,
      default:Date.now
    }
});
//=======================================
UserSchema.methods.toJSON = function () {
  var user = this;
  var userObject = user.toObject();

  return _.pick(userObject, ['_id','username','firstName','lastName']);
};
//=======================================

//write verify password here on the Schema

//export user model
//module.exports = mongoose.model('User', UserSchema);
var User = mongoose.model('UserProfile', UserSchema);
module.exports = User;
