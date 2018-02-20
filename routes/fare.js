/**
*Load module dependecies
*/
var express = require('express');

//var fareController = require('../controllers/fare_');
var fareController = require('../controllers/fare');
var noop = require('../lib/utils').noop;
var middleware =require('../lib/middleware/auth');
var requireAuthentication = middleware.requireAuthentication;
var authenticate =require('../lib/middleware/authenticate').authenticate;

var router = express.Router();
/**
 * @api {POST} /fares/ Create fare
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
router.post('/',authenticate, fareController.create);

/**
 * @api {GET} /fares/ Get Stations
 * @apiName GetStations
 * @apiGroup Station
 *
 *
 */
 router.get('/',authenticate, fareController.getAll);
//
// /**
//  * @api {GET} /fares/paginate Station Paginate
//  * @apiName GetStationsPaginate
//  * @apiGroup Station
//  *
//  * @
//  */
router.get('/paginate',authenticate, fareController.paginate);
/**
 * @api {PUT} /fares/search Search Station
 * @apiName SearchStations
 * @apiGroup Station
 *
 * @apiParamExample Request Example
 *
 * {"email": "john1@aksum.com"}
 */
 //the following should use get http method
router.put('/search',authenticate, fareController.search);

/**
 * @api {GET} /fares/:id Get Station
 * @apiName GetStation
 * @apiGroup Station
 *
 * @apiParamExample Request Example
 *
 * http://localhost:3000/fares/5a478c962698af267483b1ee
 */
router.get('/:id',authenticate, fareController.getById);

/**
 * @api {UPDATE} /fares/:id Update Station
 * @apiName UpdateStations
 * @apiGroup Station
 *
 * @apiParamExample Request Example
 *
 * http://localhost:3000/fares/5a478c962698af267483b1ee
 */
router.put('/:id',authenticate, fareController.update);

/**
 * @api {DELETE} /fares/:id Delete Station
 * @apiName DeleteStations
 * @apiGroup Station
 *
 * @apiParamExample Request Example
 *
 * http://localhost:3000/fares/5a478c962698af267483b1ee
 */
router.delete('/:id', authenticate, fareController.delete);
//SET FARE AMOUNT
router.put('/setfareamount', authenticate, fareController.setFareAmount);
//SET FARE AMOUNT
router.put('/setdistance', authenticate, fareController.setDistance);
//findAndPopulate
router.get('/populate/:id', authenticate, fareController.findAndPopulate);
//getTotalPrice
router.get('/fare/price/', authenticate, fareController.getTotalPrice);
//completeInfo
router.get('/fare/info/', authenticate, fareController.completeInfo);

module.exports = router;
