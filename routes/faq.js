/**
*Load module dependecies
*/
var express = require('express');

//var faqController = require('../controllers/faq_');
var faqController = require('../controllers/faq');
var noop = require('../lib/utils').noop;
var middleware =require('../lib/middleware/auth');
var requireAuthentication = middleware.requireAuthentication;
var authenticate = require('../lib/middleware/authenticate').authenticate;

var router = express.Router();
/**
 * @api {POST} /faqs/ Create faq
 * @apiName CreateStation
 * @apiGroup Station
 * @apiDescription Creates a new Station
 *
 * @apiParam {String} name The name of the Station
 * @apiParam {String} faqId The last name of the Station
 * @apiParam {String} route The route of the Station
 * @apiParam {Number} latitude The latitude of the faq
 * @apiParam {Number} longitude The longitude of the sation
 *
 * @apiParamExample Request Example
 *
 * {
 *   "_id": "5a74264fc461a418b08dae07",
 *   "faqId": "2",
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
router.post('/',authenticate, faqController.create);

/**
 * @api {GET} /faqs/ Get Stations
 * @apiName GetStations
 * @apiGroup Station
 *
 *
 */
 router.get('/',authenticate, faqController.findAll);
//
// /**
//  * @api {GET} /faqs/paginate Station Paginate
//  * @apiName GetStationsPaginate
//  * @apiGroup Station
//  *
//  * @
//  */
router.get('/paginate',authenticate, faqController.paginate);
/**
 * @api {PUT} /faqs/search Search Station
 * @apiName SearchStations
 * @apiGroup Station
 *
 * @apiParamExample Request Example
 *
 * {"email": "john1@aksum.com"}
 */
 //the following should use get http method
router.get('/search/:name',authenticate, faqController.searchByName);

/**
 * @api {GET} /faqs/:id Get Station
 * @apiName GetStation
 * @apiGroup Station
 *
 * @apiParamExample Request Example
 *
 * http://localhost:3000/faqs/5a478c962698af267483b1ee
 */
 router.get('/:id',authenticate, faqController.findById);
 //

router.get('/customid/:cid',authenticate, faqController.findByCustomId);

/**
 * @api {UPDATE} /faqs/:id Update Station
 * @apiName UpdateStations
 * @apiGroup Station
 *
 * @apiParamExample Request Example
 *
 * http://localhost:3000/faqs/5a478c962698af267483b1ee
 */
router.put('/:id',authenticate, faqController.update);

/**
 * @api {DELETE} /faqs/:id Delete Station
 * @apiName DeleteStations
 * @apiGroup Station
 *
 * @apiParamExample Request Example
 *
 * http://localhost:3000/faqs/5a478c962698af267483b1ee
 */
router.delete('/:id', authenticate, faqController.delete);
//router.get('/faq/:name', authenticate, faqController.findByName);

module.exports = router;
