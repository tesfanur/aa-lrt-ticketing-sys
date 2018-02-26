/**
*Load module dependecies
*/
var express = require('express');
/**
*Load local module dependecies
*/
var fareController = require('../controllers/fare');

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
router.post('/', fareController.create);

/**
 * @api {GET} /fares/ Get Stations
 * @apiName GetStations
 * @apiGroup Station
 *
 *
 */
 router.get('/',fareController.getAll);
//
// /**
//  * @api {GET} /fares/paginate Station Paginate
//  * @apiName GetStationsPaginate
//  * @apiGroup Station
//  *
//  * @
//  */
router.get('/paginate', fareController.paginate);
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
router.put('/search', fareController.search);

/**
 * @api {GET} /fares/:id Get Station
 * @apiName GetStation
 * @apiGroup Station
 *
 * @apiParamExample Request Example
 *
 * http://localhost:3000/fares/5a478c962698af267483b1ee
 */
router.get('/:id', fareController.getById);

/**
 * @api {UPDATE} /fares/:id Update Station
 * @apiName UpdateStations
 * @apiGroup Station
 *
 * @apiParamExample Request Example
 *
 * http://localhost:3000/fares/5a478c962698af267483b1ee
 */
router.put('/:id', fareController.update);

/**
 * @api {DELETE} /fares/:id Delete Station
 * @apiName DeleteStations
 * @apiGroup Station
 *
 * @apiParamExample Request Example
 *
 * http://localhost:3000/fares/5a478c962698af267483b1ee
 */
router.delete('/:id', fareController.delete);
//SET FARE AMOUNT
router.put('/setfareamount', fareController.setFareAmount);
//SET FARE AMOUNT
router.put('/setdistance',  fareController.setDistance);
//findAndPopulate
router.get('/populate/:id', fareController.findAndPopulate);
//getTotalPrice
router.get('/fare/price/',  fareController.getTotalPrice);
//completeInfo
router.get('/fare/info/', fareController.completeInfo);

module.exports = router;
