/**
*Load third party module dependecies
*/
const express = require('express');
/**
*Load custom module dependencies
*/
const faqController = require('../controllers/faq');

const router = express.Router();
// ------------------------------------------------------------------------------------------
// Faq Success Response
// ------------------------------------------------------------------------------------------
/**
 * @apiDefine UserSuccess
 * @apiSuccess {Object} _id User Auto generated mongodb object Id
 * @apiSuccess {Object} question Faq Question
 * @apiSuccess {String} question.description Faq description of the Question
 * @apiSuccess {String} question.askedBy Faq author of description of the Question
 * @apiSuccess {Date} question.createdAt Faq Question's creation date time
 * @apiSuccess {Date} question.modifiedAt Faq Question's editing date time
 * @apiSuccess {Object} answer Faq Answer
 * @apiSuccess {String} answer.description Faq description of the Question
 * @apiSuccess {String} answer.answerdBy Faq author of answer for the Question
 * @apiSuccess {Date} answer.createdAt Faq Answer's creation date time
 * @apiSuccess {Date} answer.modifiedAt Faq Answer's editing date time
*/
// ------------------------------------------------------------------------------------------
// Current Permissions.
// ------------------------------------------------------------------------------------------
/**
 * @apiDefine UnauthorizedError
 * @apiVersion 0.1.0
 *
 * @apiError Unauthorized Only authenticated users can access the endpoint.
 *
 * @apiErrorExample  Unauthorized response:
 *     HTTP 401 Unauthorized
 *     {
 *      "message":"Access is forbidden"
 *     }
 */

    /**
    * @api {post} /faqs Create Faq
    * @apiVersion 0.1.0
    * @apiName CreateFaq
    * @apiGroup Faq
    * @apiPermission authenticated user
    *
    * @apiDescription create frequently asked question
    * @apiParam (Request body) {Object} question The question description
    *
    * @apiExample {json} Request-Example:
    *{
    *  "question":{
   	*    "description" :"Is there any charter train for special events"
    *  }
    * }
    *
    * $http.defaults.headers.common["Authorization"] = token;
    * $http.post(url, data)
    *   .success((res, status) => doSomethingHere())
    *   .error((err, status) => doSomethingHere());
    *
    * @apiSuccess (Success 201) {String} question.description Faq created question
    *apiUse UserSuccess
    * @apiSuccessExample {json} Response-Example:
    *     HTTPS 201 OK
    * {
    * "_id": "5a957763f45a380610389b8e",
    * "answer": {
    *    "modifiedAt": "2018-02-27T15:21:07.212Z",
    *    "createdAt": "2018-02-27T15:21:07.212Z",
    *    "description": "Not answerd yet"
    * },
    * "question": {
    *    "description": "Is there any charter train for special events",
    *    "askedBy": "5a8157014d99ed52700bc99f",
    *    "modifiedAt": "2018-02-27T15:21:07.212Z",
    *    "createdAt": "2018-02-27T15:21:07.212Z"
    *}
    *}
    * @apiUse UnauthorizedError
    */
router.post('/', faqController.create);


  /**
    * @api {get} /faqs Get Faqs
    * @apiVersion 0.1.0
    * @apiName GetAllFaqs
    * @apiGroup Faq
    * @apiPermission authenticated user
    *
    * @apiDescription list all frequently asked questions
    * @apiExample {js} Request-Example:
    * $http.defaults.headers.common["Authorization"] = token;
    * $http.get(url)
    *   .success((res, status) => doSomethingHere())
    *   .error((err, status) => doSomethingHere());
    *
    *apiUse UserSuccess
    * @apiSuccess {String} _id The faq id
    * @apiSuccess {String} name The faq name
    *
    * @apiSuccessExample {json} Success response:
    *     HTTPS 200 OK
    *     [{
    *       "_id": "57e8e94ea06a0c473bac50cc",
    *       "name": "Do the disehs"
    *      },
    *      {
    *       "_id": "57e903941ca43a5f0805ba5a",
    *       "name": "Take out the trash"
    *     }]
    *
    * @apiUse UnauthorizedError
    */
 router.get('/', faqController.findAll);

  /**
    * @api {get} /faqs/paginate Paginate Faqs
    * @apiVersion 0.1.0
    * @apiName GetAll
    * @apiGroup Faq
    * @apiPermission authenticated user
    *
    * @apiDescription list all frequently asked question by pagination
    * @apiExample {js} Request-Example:
    * $http.defaults.headers.common["Authorization"] = token;
    * $http.get(url)
    *   .success((res, status) => doSomethingHere())
    *   .error((err, status) => doSomethingHere());
    *
    *apiUse UserSuccess
    * @apiSuccess {String} _id The faq id
    * @apiSuccess {String} name The faq name
    *
    * @apiSuccessExample {json} Success response:
    *     HTTPS 200 OK
    *     [{
    *       "_id": "57e8e94ea06a0c473bac50cc",
    *       "name": "Do the disehs"
    *      },
    *      {
    *       "_id": "57e903941ca43a5f0805ba5a",
    *       "name": "Take out the trash"
    *     }]
    *
    * @apiUse UnauthorizedError
    */
router.get('/paginate', faqController.paginate);
/**
  * @api {get} /faqs/:desc Search Faq
  * @apiVersion 0.1.0
  * @apiName SearchFaq
  * @apiGroup Faq
  * @apiPermission authenticated user
  *
  *@apiDescription find frequently asked question by description
  * @apiParam {String} id The faq id
  *
  * @apiExample {js} Request-Example:
  * $http.defaults.headers.common["Authorization"] = token;
  * $http.get(url)
  *   .success((res, status) => doSomethingHere())
  *   .error((err, status) => doSomethingHere());
  *
  * @apiSuccess {String} _id The faq id
  * @apiSuccess {String} name The faq name
  *
  * @apiSuccessExample {json} Success response:
   *     HTTPS 200 OK
   *     {
   *        "_id": "57e8e94ea06a0c473bac50cc",
   *        "name": "Do the disehs",
   *        "__v": 0
   *      }
   *
   * @apiUse UnauthorizedError
  */
router.get('/search/:desc', faqController.searchByDesc);
/**
  * @api {get} /faqs/:id  Get Faq
  * @apiVersion 0.1.0
  * @apiName GetFaq
  * @apiGroup Faq
  * @apiPermission authenticated user
  *
  *@apiDescription Retrieve frequently asked question by Id
  * @apiParam {String} id The faq id
  *
  * @apiExample {js} Request-Example:
  * $http.defaults.headers.common["Authorization"] = token;
  * $http.get(url)
  *   .success((res, status) => doSomethingHere())
  *   .error((err, status) => doSomethingHere());
  *
  * @apiSuccess {String} _id The faq id
  * @apiSuccess {String} name The faq name
  *
  * @apiSuccessExample {json} Success response:
   *     HTTPS 200 OK
   *     {
   *        "_id": "57e8e94ea06a0c473bac50cc",
   *        "name": "Do the disehs",
   *        "__v": 0
   *      }
   *
   * @apiUse UnauthorizedError
  */
 router.get('/:id', faqController.findById);

/**
 * @api {UPDATE} /faqs/:id Update Faq
 * @apiName UpdateFaqs
 * @apiGroup Faq
 *
 * @apiParamExample Request Example
 *
 * url/faqs/5a478c962698af267483b1ee
 */
router.put('/:id', faqController.update);

 /**
  * @api {delete} /faq/:id Delete a faq
  * @apiVersion 0.1.0
  * @apiName DeleteFaq
  * @apiGroup Faq
  * @apiPermission authenticated user
  *
  *@apiDescription Delete frequently asked question by Id
  *
  * @apiParam {String} id The faq id
  *
  * @apiExample {js} Request-Example:
  * $http.defaults.headers.common["Authorization"] = token;
  * $http.delete(url)
  *   .success((res, status) => doSomethingHere())
  *   .error((err, status) => doSomethingHere());
  *
  * @apiSuccess {String} message Faq deleted successfully!
  *
  * @apiSuccessExample {json} Success response:
   *     HTTPS 200 OK
   *     {
   *      "message": "Faq deleted successfully!"
   *    }
   *
   * @apiUse UnauthorizedError
  */
router.delete('/:id', faqController.delete);

module.exports = router;
