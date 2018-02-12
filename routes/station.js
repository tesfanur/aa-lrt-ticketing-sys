/**
*Load module dependecies
*/
var express = require('express');

//var stationController = require('../controllers/station_');
var stationController = require('../controllers/station');
var noop = require('../lib/utils').noop;
var middleware =require('../lib/middleware/auth');
var requireAuthentication = middleware.requireAuthentication;
var authenticate = require('../lib/middleware/authenticate').authenticate;

var router = express.Router();
/**
 * @api {POST} /stations/ Create station
 * @apiName CreateStation
 * @apiGroup Station
 * @apiDescription Creates a new Station
 *
 * @apiParam {String} firstName The first name of the Station
 * @apiParam {String} lastName The last name of the Station
 * @apiParam {String} email The email address of the Station
 * @apiParam {String} password The user password
 *
 * @apiParamExample Request Example
 *
 * {
 *	"email": "john1@aksum.com",
 *	"password": "password",
 *	"firstName": "John",
 *	"lastName": "Doe"
 * }
 *
 * @apiSuccessExample Response Example
 *
 * {
 *   "_id": "5a478c962698af267483b1ee",
 *   "email": "john1@aksum.com",
 *   "firstName": "John",
 *   "lastName": "Doe",
 *   "dateCreated": "2017-12-30T12:54:46.419Z",
 *   "lastModified": "2017-12-30T12:54:46.419Z",
 *   "__v": 0
 * }
 */
router.post('/',authenticate, stationController.create);

/**
 * @api {GET} /stations/ Get Stations
 * @apiName GetStations
 * @apiGroup Station
 *
 *
 */
 router.get('/',authenticate, stationController.getAll);
//
// /**
//  * @api {GET} /stations/paginate Station Paginate
//  * @apiName GetStationsPaginate
//  * @apiGroup Station
//  *
//  * @
//  */
router.get('/paginate',authenticate, stationController.paginate);
/**
 * @api {PUT} /stations/search Search Station
 * @apiName SearchStations
 * @apiGroup Station
 *
 * @apiParamExample Request Example
 *
 * {"email": "john1@aksum.com"}
 */
 //the following should use get http method
router.put('/search',authenticate, stationController.search);

/**
 * @api {GET} /stations/:id Get Station
 * @apiName GetStation
 * @apiGroup Station
 *
 * @apiParamExample Request Example
 *
 * http://localhost:3000/stations/5a478c962698af267483b1ee
 */
router.get('/:id',authenticate, stationController.getById);

/**
 * @api {UPDATE} /stations/:id Update Station
 * @apiName UpdateStations
 * @apiGroup Station
 *
 * @apiParamExample Request Example
 *
 * http://localhost:3000/stations/5a478c962698af267483b1ee
 */
router.put('/:id',authenticate, stationController.update);

/**
 * @api {DELETE} /stations/:id Delete Station
 * @apiName DeleteStations
 * @apiGroup Station
 *
 * @apiParamExample Request Example
 *
 * http://localhost:3000/stations/5a478c962698af267483b1ee
 */
router.delete('/:id', authenticate, stationController.delete);
router.get('/station/:name', authenticate, stationController.findByName);

module.exports = router;
