const mongoose = require('mongoose');
const paginator = require('mongoose-paginate');
const moment = require('moment');

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
/**
 *Train Transport payment/fare Schema
 */
var FareSchema = new Schema({
  userId: {
    type: ObjectId,
    required: true,
    ref: 'User'
  },
  from: {
    type: ObjectId,
    required: true,
    ref: 'Station'
  },
  to: {
    type: ObjectId,
    required: true,
    ref: 'Station'
  },
  route: {
    type: String,
    required: true,
    enum: ["EW", "NS", ""],
    default: ""
  },
  distance: Number,
  fare: Number,

  createdAt: {
    type: Date
  },
  modifiedAt: {
    type: Date
  }
});
//=======================================
FareSchema.methods.toJSON = function() {
  var fare = this;
  var fareObject = fare.toObject();
  // var toPublic ={};
  // toPublic._id =fareObject._id;
  // toPublic.from =fareObject.from.name;
  // toPublic.to =fareObject.to.name;
  // toPublic.createdBy =fareObject.userId.email;
  // toPublic.createdAt = fareObject.createdAt;
  // toPublic.modifiedAt =fareObject.modifiedAt;

  console.log("fareObject :", fareObject);
  return _.pick(fareObject, ['_id', 'from', 'name', 'to', 'userId', "distance", "fare", 'createdAt', 'modifiedAt']);
  //return toPublic;
};
//CALULATE FARE AMOUNT USING DISTANCE AS INPUT
FareSchema.pre('save', function(next) {
  var _this = this;
  _this.fare = parseInt(_this.distance) * 6 / 16000; //payment in birr
  next();
});
FareSchema.pre('save', (next) => {
  var _this = this;

  // set date modifications
  var now = moment().toISOString();

  _this.createdAt = new Date();
  _this.modifiedAt = new Date();

  next();

});
FareSchema.statics.whitelist = {
  _id: 1,
  userId: 1,
  from: 1,
  to: 1,
  fare: 1,
  distance: 1,
  createdAt: 1,
  modifiedAt: 1
};

//Add mongoose paginate
FareSchema.plugin(paginator);


//export fare model
module.exports = mongoose.model('Fare', FareSchema);