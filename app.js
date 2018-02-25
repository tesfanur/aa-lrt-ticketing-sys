/**
*Load third party module dependecies
*/
var cors         = require('cors'),
		morgan       = require('morgan'),
		express      = require('express'),
		passport     = require('passport'),
		mongoose     = require('mongoose'),
    bodyParser   = require('body-parser'),
		debug        = require('debug')('api'),
		cookieParser = require('cookie-parser'),
		session      = require('express-session'),
		validate     = require('express-validator');
 /**
 *Load local module dependecies
 */
var  router  = require('./routes'),
     utils   = require('./lib/utils'),
		 User    = require('./models/user'),
		 config  = require('./config/config'),
		 dbConnect     = require('./config/connection'),
		 authenticate  = require('./lib/middleware/authenticate');
		 //handleServerStartup

//instantiate express -server
var app  = express();

debug('AA LRT ONLINE TICKETING SYSTEM');
//configuration express app
app.set('PORT', config.PORT);
app.set('SECRET', config.SECRET);

//strat database connection
dbConnect.toMongoDB(mongoose);

//set up express app by passing required middlewares
app.use(bodyParser.json());// parse application/json
app.use(bodyParser.urlencoded({ extended: true }));// parse application/x-www-form-urlencoded

app.use(cors(config.CORS_OPTS));//prevent CORS errors
app.use(validate());//use express validator for user input validation
app.use(morgan('dev'));
//Logging HTTP Method and URL
app.use(cookieParser());
app.use(session(config.SESSION_OPTS));

app.use("/uploads",express.static('uploads'));
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

module.exports=app;
