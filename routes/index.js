// Load custom Module Dependencies
//const authenticate = require('../lib/middleware/authenticate').authenticate;
const home         = require('../lib/utils').root;
/**
*load all routes
*/
const userRouter     = require('./user');
const fareRouter     = require('./fare');
const faqRouter     = require('./faq');
const ticketRouter   = require('./ticket');
const stationRouter  = require('./station');
const scheduleRouter = require('./schedule');
const userProfileRouter   = require('./user_profile');
const profileImageRouter = require('./profileimage');

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
	//Frequently asked questions faq routes
	app.use('/faqs', faqRouter);
	//User Profile routes
	app.use('/profiles', userProfileRouter);
 //get home page
	app.get('/',home);
}
