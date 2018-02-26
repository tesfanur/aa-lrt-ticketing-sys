/**
*Load module dependecies
*/
var express = require('express');

//var stationController = require('../controllers/station_');
var stationController = require('../controllers/station');
var noop = require('../lib/utils').noop;
// var middleware =require('../lib/middleware/auth');
// var requireAuthentication = middleware.requireAuthentication;
// var authenticate = require('../lib/middleware/authenticate').authenticate;

var router = express.Router();
/**
 * @api {POST} /stations/ Create station
 * @apiName CreateStation
 * @apiGroup Station
 * @apiDescription Creates a new Station
 *
 * @apiParam {String} name The name of the Station
 * @apiParam {String} stationId The last name of the Station
 * @apiParam {String} route The route of the Station
 * @apiParam {Number} latitude The latitude of the station
 * @apiParam {Number} longitude The longitude of the sation
 *
 * @apiParamExample Request Example
 *
 * {
 *   "_id": "5a74264fc461a418b08dae07",
 *   "stationId": "2",
 *   "name": "Meri",
 *   "longitude": 38.863153,
 *   "latitude": 9.0195233,
 *   "createdAt": "2018-02-02T08:50:23.602Z",
 *   "modifiedAt": "2018-02-02T08:50:23.602Z",
 *   "route": "EW"
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
router.post('/', stationController.create);

/**
 * @api {GET} /stations/ Get Stations
 * @apiName GetStations
 * @apiGroup Station
 *
 *
 */
 router.get('/', stationController.findAll);
//
// /**
//  * @api {GET} /stations/paginate Station Paginate
//  * @apiName GetStationsPaginate
//  * @apiGroup Station
//  *
//  * @
//  */
router.get('/paginate', stationController.paginate);
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
router.get('/search/:name', stationController.searchByName);

/**
 * @api {GET} /stations/:id Get Station
 * @apiName GetStation
 * @apiGroup Station
 *
 * @apiParamExample Request Example
 *
 * http://localhost:3000/stations/5a478c962698af267483b1ee
 */
 router.get('/:id', stationController.findById);
 //

router.get('/customid/:cid', stationController.findByCustomId);

/**
 * @api {UPDATE} /stations/:id Update Station
 * @apiName UpdateStations
 * @apiGroup Station
 *
 * @apiParamExample Request Example
 *
 * http://localhost:3000/stations/5a478c962698af267483b1ee
 */
router.put('/:id', stationController.update);

/**
 * @api {DELETE} /stations/:id Delete Station
 * @apiName DeleteStations
 * @apiGroup Station
 *
 * @apiParamExample Request Example
 *
 * http://localhost:3000/stations/5a478c962698af267483b1ee
 */
router.delete('/:id', stationController.delete);

module.exports = router;
