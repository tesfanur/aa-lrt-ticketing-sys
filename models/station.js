var mongoose = require('mongoose');
var paginator = require('mongoose-paginate');
var Q = require('q'); // We can now use promises!
_ = require('lodash');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;
/**
 *Train Stations Schema
 */
var StationSchema = new Schema({
  _id: {
    type: Number,
    unique: true
  },
  // stationId: {
  //   type: Number,
  //   unique: true
  // },
  createdBy: {
    type: ObjectId,
    required: true,
    ref: 'User'
  },
  route: {
    type: String,
    required: true,
    enum: ["EW", "NS", ""],
    default: ""
  },
  nameEng: {
    type: String,
    unique: true
  },
  nameAmh: {
    type: String,
    unique: true
  },
  latitude: {
    type: Number
  },
  longitude: {
    type: Number
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
//when do we use mongoose schema methods
StationSchema.methods.toJSON = function() {
  var station = this;
  var stationObject = station.toObject();

  return _.pick(stationObject, ['_id', 
    'stationId','createdBy','nameAmh', 'nameEng', 
    'longitude', 'latitude', 'createdAt', 
    'modifiedAt', "route"]);
};

//Static method we can call via Station.getStationByName in our code
//since promise already added into mongoose library you don't need
//to re invent the wheel from the scratch
StationSchema.statics.findByName = function(name) {
  //return promise object
  return this.findOne({
    // stationName: name
    nameEng: name
  }).exec();
}


//Add mongoose paginate
StationSchema.plugin(paginator);

//export user model
module.exports = mongoose.model('Station', StationSchema);
