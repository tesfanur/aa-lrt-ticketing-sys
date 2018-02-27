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
 * @apiName CreateFare
 * @apiGroup Fare
 * @apiDescription Creates a new Fare
 *
 * @apiParam {String} firstName The first name of the Fare
 * @apiParam {String} lastName The last name of the Fare
 * @apiParam {String} email The email address of the Fare
 * @apiParam {String} password The user password
 *
 * @apiParamExample Request Example
 *
 * {
 *	"email": "evana.magato@hotmail.com",
 *	"password": "password",
 *	"firstName": "John",
 *	"lastName": "Doe"
 * }
 *
 * @apiSuccessExample Response Example
 *
 * {
 *   "_id": "5a478c962698af267483b1ee",
 *   "email": "evana.magato@hotmail.com",
 *   "firstName": "John",
 *   "lastName": "Doe",
 *   "dateCreated": "2017-12-30T12:54:46.419Z",
 *   "lastModified": "2017-12-30T12:54:46.419Z",
 *   "__v": 0
 * }
 */
router.post('/', fareController.create);

/**
 * @api {GET} /fares/ Get Fares
 * @apiName GetFares
 * @apiGroup Fare
 *
 *
 */
 router.get('/',fareController.getAll);

/**
 * @api {GET} /fares/paginate Fare Paginate
 * @apiName GetFaresPaginate
 * @apiGroup Fare
 *
 *
 */
router.get('/paginate', fareController.paginate);
/**
 * @api {PUT} /fares/search Search Fare
 * @apiName SearchFares
 * @apiGroup Fare
 *
 * @apiParamExample Request Example
 *
 * {"email": "evana.magato@hotmail.com"}
 */
 //the following should use get http method
//router.put('/search', fareController.search);

/**
 * @api {GET} /fares/:id Get Fare
 * @apiName GetFare
 * @apiGroup Fare
 *
 * @apiParamExample Request Example
 *
 * http://localhost:3000/fares/5a478c962698af267483b1ee
 */
router.get('/:id', fareController.getById);

/**
 * @api {UPDATE} /fares/:id Update Fare
 * @apiName UpdateFares
 * @apiGroup Fare
 *
 * @apiParamExample Request Example
 *
 * http://localhost:3000/fares/5a478c962698af267483b1ee
 */
router.put('/:id', fareController.update);

/**
 * @api {DELETE} /fares/:id Delete Fare
 * @apiName DeleteFares
 * @apiGroup Fare
 *
 * @apiParamExample Request Example
 *
 * http://localhost:3000/fares/5a478c962698af267483b1ee
 */
router.delete('/:id', fareController.delete);
/**
 * @api {DELETE} /fares/:id Delete Fare
 * @apiName DeleteFares
 * @apiGroup Fare
 *
 * @apiParamExample Request Example
 *
 * http://localhost:3000/fares/5a478c962698af267483b1ee
 */
router.put('/setfareamount', fareController.setFareAmount);
/**
 * @api {DELETE} /fares/:id Delete Fare
 * @apiName DeleteFares
 * @apiGroup Fare
 *
 * @apiParamExample Request Example
 *
 * http://localhost:3000/fares/5a478c962698af267483b1ee
 */
router.put('/setdistance',  fareController.setDistance);
/**
 * @api {DELETE} /fares/:id Delete Fare
 * @apiName DeleteFares
 * @apiGroup Fare
 *
 * @apiParamExample Request Example
 *
 * http://localhost:3000/fares/5a478c962698af267483b1ee
 */
router.get('/populate/:id', fareController.findAndPopulate);
/**
 * @api {DELETE} /fares/:id Delete Fare
 * @apiName DeleteFares
 * @apiGroup Fare
 *
 * @apiParamExample Request Example
 *
 * http://localhost:3000/fares/5a478c962698af267483b1ee
 */
router.get('/fare/price/',  fareController.getTotalPrice);
/**
 * @api {DELETE} /fares/:id Delete Fare
 * @apiName DeleteFares
 * @apiGroup Fare
 *
 * @apiParamExample Request Example
 *
 * http://localhost:3000/fares/5a478c962698af267483b1ee
 */
router.get('/fare/info/', fareController.completeInfo);

module.exports = router;
