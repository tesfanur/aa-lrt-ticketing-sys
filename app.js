/**
 *Load third party module dependecies
 */
var cors = require('cors'),
	morgan = require('morgan'),
	express = require('express'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	debug = require('debug')('api'),
	cookieParser = require('cookie-parser'),
	session = require('express-session'),
	validate = require('express-validator'),
	RateLimit = require('express-rate-limit');

/**
*API request limiter
*/
var apiLimiter = new RateLimit({
  windowMs: 15*60*1000, // 15 minutes
  max: 100,
  delayMs: 0 // disabled
});
/**
 *Load local module dependecies
 */
var router = require('./routes'),
	utils = require('./lib/utils'),
	User = require('./models/user'),
	config = require('./config/config'),
	connect = require('./config/connection'),
	authenticate = require('./lib/middleware/authenticate');

//instantiate express -server
var app = express();
// apply RateLimit for requests that begin with
//tickets, users, stations, fares
app.use('/tickets/', apiLimiter);
app.use('/users/', apiLimiter);
app.use('/stations/', apiLimiter);
app.use('/fares/', apiLimiter);

app.disable('x-powered-by');
app.set('x-powered-by', false);

debug('AA LRT ONLINE TICKETING SYSTEM');
//configuration express app
app.set('PORT', config.PORT);
app.set('SECRET', config.SECRET);
app.use(express.static(__dirname + '/docs/'));

//strat database connection
connect.toMongoDB(mongoose);

//set up express app by passing required middlewares
// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(cors(config.CORS_OPTS)); //prevent CORS errors

app.use(validate());
app.use(morgan('dev'));
//Logging HTTP Method and URL
app.use(cookieParser());
//app.use(session(config.SESSION_OPTS));

app.use("/uploads", express.static('uploads'));
//filter endpoints and Authenticate the rest
app.use(authenticate().unless(config.UNLESS_OPTS));
/**
 *pass express app to the routing object
 */
router(app);
/**
 *Handle if page requested not found
 */
app.use(utils.pageNotfound);
/**
 *handle errors thrown from the previous middlewares
 */
app.use(utils.handleErrors);
/**
 *start express server
 */
app.listen(app.get('PORT'), utils.handleServerStartup);

module.exports = app;
