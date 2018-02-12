var mongoose = require('mongoose');
var paginator = require('mongoose-paginate');
var Q = require('q'); // We can now use promises!
_         = require('lodash');
var Schema = mongoose.Schema;
var ObjectId =Schema.Types.ObjectId;
/**
*Train Courses Schema
*/
var CourseSchema = new Schema({
    name   :  {type: String, unique: true},
    students  : [{type: ObjectId, ref:"student"}],
    createdAt   :  {type:Date, default:Date.now},
    modifiedAt  :  {type:Date, default:Date.now}

});
//when do we use mongoose schema methods
CourseSchema.methods.toJSON = function () {
  var course = this;
  var courseObject = course.toObject();

  return _.pick(stationObject, ['_id','name','createdAt','modifiedAt']);
};

//Add mongoose paginate
CourseSchema.plugin(paginator);

//export user model
module.exports = mongoose.model('Course', CourseSchema);
