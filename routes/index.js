// Load Module Dependencies

var authenticate   = require('../lib/middleware/authenticate').authenticate;
var home           = require('../lib/utils').root;
var userRouter     = require('./user');
var scheduleRouter = require('./schedule');
var stationRouter  = require('./station');
var fareRouter     = require('./fare');
var ticketRouter   = require('./ticket');
var userProfileRouter   = require('./user_profile');
//var courseRouter = require('./course');
var profileImageRouter = require('./profileimage');


module.exports = function appRouter(app) {

	//User router
	app.use('/users', userRouter);
	//profile routes
	app.use('/images', profileImageRouter);
	//Station routes
	app.use('/stations', stationRouter);
	//Schedule routes
	app.use('/schedules', scheduleRouter);
	//Ticket routes
	app.use('/tickets', ticketRouter);
	//Fare/Payment routes
	app.use('/fares', fareRouter);
	//User Profile routes
	app.use('/profiles', userProfileRouter);
 //get home page
	app.get('/',home);
}
