var mongoose = require('mongoose');
var paginator = require('mongoose-paginate');
var Q = require('q'); // We can now use promises!
_         = require('lodash');
var Schema = mongoose.Schema;
var ObjectId =Schema.Types.ObjectId;
/**
*Train Students Schema
*/
var StudentSchema = new Schema({
    username   :  {type: String, unique: true},
    course      :  {type: String},
    createdAt   :  {type:Date, default:Date.now},
    modifiedAt  :  {type:Date, default:Date.now}

});
//when do we use mongoose schema methods
StudentSchema.methods.toJSON = function () {
  var student = this;
  var studentObject = student.toObject();

  return _.pick(stationObject, ['_id','username','createdAt','modifiedAt']);
};

//Add mongoose paginate
StudentSchema.plugin(paginator);

//export user model
module.exports = mongoose.model('Student', StudentSchema);
