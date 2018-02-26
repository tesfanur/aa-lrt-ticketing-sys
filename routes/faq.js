/**
*Load third party module dependecies
*/
const express = require('express');
/**
*Load custom module dependencies
*/
const faqController = require('../controllers/faq');

const router = express.Router();

/**
 * @api {POST} /faqs/ Create faq
 * @apiName CreateFaq
 * @apiGroup Faq
 * @apiDescription Creates a new Faq
 *
 * @apiParam {String} name The name of the Faq
 * @apiParam {String} faqId The last name of the Faq
 * @apiParam {String} route The route of the Faq
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
 *   "email": "evana.mangato@hotmail.com",
 *   "firstName": "John",
 *   "lastName": "Doe",
 *   "dateCreated": "2017-12-30T12:54:46.419Z",
 *   "lastModified": "2017-12-30T12:54:46.419Z",
 *   "__v": 0
 * }
 */
router.post('/', faqController.create);

/**
 * @api {GET} /faqs/ Get Faqs
 * @apiName GetFaqs
 * @apiGroup Faq
 *
 *
 */
 router.get('/', faqController.findAll);
//
// /**
//  * @api {GET} /faqs/paginate Faq Paginate
//  * @apiName GetFaqsPaginate
//  * @apiGroup Faq
//  *
//  * @
//  */
router.get('/paginate', faqController.paginate);
/**
 * @api {PUT} /faqs/search Search Faq
 * @apiName SearchFaqs
 * @apiGroup Faq
 *
 * @apiParamExample Request Example
 *
 * {"email": "evana.mangato@hotmail.com"}
 */
 //the following should use get http method
router.get('/search/:desc', faqController.searchByDesc);

/**
 * @api {GET} /faqs/:id Get Faq
 * @apiName GetFaq
 * @apiGroup Faq
 *
 * @apiParamExample Request Example
 *
 * http://localhost:3000/faqs/5a478c962698af267483b1ee
 */
 router.get('/:id', faqController.findById);

/**
 * @api {UPDATE} /faqs/:id Update Faq
 * @apiName UpdateFaqs
 * @apiGroup Faq
 *
 * @apiParamExample Request Example
 *
 * http://localhost:3000/faqs/5a478c962698af267483b1ee
 */
router.put('/:id', faqController.update);

/**
 * @api {DELETE} /faqs/:id Delete Faq
 * @apiName DeleteFaqs
 * @apiGroup Faq
 *
 * @apiParamExample Request Example
 *
 * http://localhost:3000/faqs/5a478c962698af267483b1ee
 */
router.delete('/:id', faqController.delete);

module.exports = router;
