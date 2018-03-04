const mongoose = require('mongoose');
const paginator = require('mongoose-paginate');
const Schema = mongoose.Schema;
//try to redesign this schema so that your can clearly relate the schedule with
// the static data regarding stations records
/**
 *Train Schedule
 */
var ScheduleSchema = new Schema({
	stationId: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: 'Station'
	},
	createdBy: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: 'User'
	},
	trainId: {
		type: String,
		required: true
	}, //create train model
	arrivalTime: {
		type: Date,
		required: true
	},
	departureTime: {
		type: Date,
		required: true
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


//Add mongoose paginate
ScheduleSchema.plugin(paginator);

//export user model
module.exports = mongoose.model('Schedule', ScheduleSchema);
