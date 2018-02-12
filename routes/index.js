// Load Module Dependencies

var authenticate   = require('../lib/middleware/authenticate').authenticate;
var home           = require('../lib/utils').root;
var userRouter     = require('./user');
var profileRouter  = require('./profile');
var scheduleRouter = require('./schedule');
var stationRouter  = require('./station');
var fareRouter     = require('./fare');
var ticketRouter   = require('./ticket');
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
	//course routes
	//app.use('/courses', courseRouter);
 //get home page
	app.get('/',home);
	// app.get('/', function (req, res){
	// 	res.json({message: "ONLINE AA TRAIN TICKETING SYSTEM API STARTED RUNNING ON HEROKU!"});})


}
