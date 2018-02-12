/**
*Load module dependecies
*/
var express = require('express');

//var courseController = require('../controllers/course_');
var courseController = require('../controllers/course');
var noop = require('../lib/utils').noop;
var middleware =require('../lib/middleware/auth');
var requireAuthentication = middleware.requireAuthentication;
var authenticate =require('../lib/middleware/authenticate').authenticate;

var router = express.Router();
/**
 * @api {POST} /courses/ Create course
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
router.post('/',authenticate, courseController.create);

/**
 * @api {GET} /courses/ Get Stations
 * @apiName GetStations
 * @apiGroup Station
 *
 *
 */
//  router.get('/',authenticate, courseController.getAll);
// //
// // /**
// //  * @api {GET} /courses/paginate Station Paginate
// //  * @apiName GetStationsPaginate
// //  * @apiGroup Station
// //  *
// //  * @
// //  */
// router.get('/paginate',authenticate, courseController.paginate);
// /**
//  * @api {PUT} /courses/search Search Station
//  * @apiName SearchStations
//  * @apiGroup Station
//  *
//  * @apiParamExample Request Example
//  *
//  * {"email": "john1@aksum.com"}
//  */
//  //the following should use get http method
// router.put('/search',authenticate, courseController.search);
//
// /**
//  * @api {GET} /courses/:id Get Station
//  * @apiName GetStation
//  * @apiGroup Station
//  *
//  * @apiParamExample Request Example
//  *
//  * http://localhost:3000/courses/5a478c962698af267483b1ee
//  */
// router.get('/:id',authenticate, courseController.getById);
//
// /**
//  * @api {UPDATE} /courses/:id Update Station
//  * @apiName UpdateStations
//  * @apiGroup Station
//  *
//  * @apiParamExample Request Example
//  *
//  * http://localhost:3000/courses/5a478c962698af267483b1ee
//  */
// router.put('/:id',authenticate, courseController.update);
//
// /**
//  * @api {DELETE} /courses/:id Delete Station
//  * @apiName DeleteStations
//  * @apiGroup Station
//  *
//  * @apiParamExample Request Example
//  *
//  * http://localhost:3000/courses/5a478c962698af267483b1ee
//  */
// router.delete('/:id', authenticate, courseController.delete);
// //findAndPopulate
// router.get('/populate/:id', authenticate, courseController.findAndPopulate);

module.exports = router;
