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
 * @apiDefine FaqSuccess
 * @apiSuccess {Object} _id Faq Auto generated mongodb object Id
 * @apiSuccess {Object} question Faq Question Object
 * @apiSuccess {String} question.description Faq description of the Question
 * @apiSuccess {String} question.askedBy Faq author of description of the Question
 * @apiSuccess {Date} question.createdAt Faq Question's creation date time
 * @apiSuccess {Date} question.modifiedAt Faq Question's editing date time
 * @apiSuccess {Object} answer Faq Answer Object
 * @apiSuccess {String} answer.description Faq description of the Answer
 * @apiSuccess {String} answer.answerdBy Faq author of answer for the Question
 * @apiSuccess {Date} answer.createdAt Faq Answer's creation date time
 * @apiSuccess {Date} answer.modifiedAt Faq Answer's editing date time
*/
/**
 * @apiDefine FaqCreationSuccess
 * @apiSuccess(Success 201) {Object} _id Faq Auto generated mongodb object Id
 * @apiSuccess(Success 201) {Object} question Faq Question Object
 * @apiSuccess(Success 201) {String} question.description Faq description of the Question
 * @apiSuccess(Success 201) {String} question.askedBy Faq author of description of the Question
 * @apiSuccess(Success 201) {Date} question.createdAt Faq Question's creation date time
 * @apiSuccess(Success 201) {Date} question.modifiedAt Faq Question's editing date time
 * @apiSuccess(Success 201) {Object} answer Faq Answer Object
 * @apiSuccess(Success 201) {String} answer.description Faq description of the Question
 * @apiSuccess(Success 201) {String} answer.answerdBy Faq author of answer for the Question
 * @apiSuccess(Success 201) {Date} answer.createdAt Faq Answer's creation date time
 * @apiSuccess(Success 201) {Date} answer.modifiedAt Faq Answer's editing date time
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
 *      "message":"Access denied"
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
    * @apiParam {Object} question.description Description of faq question
    *
    * @apiExample {json} Request-Example:
    *{
    *  "question":{
   	*    "description" :"Is there any charter train for special events"
    *  }
    * }
    *
    * $http.header("Authorization") = jwtwebtoken;
    *
    * @apiSuccess (Success 201) {String} question.description Faq description of the question
    * @apiUse FaqCreationSuccess
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
    * $http.header("Authorization") = jwtwebtoken;
    *
    *apiUse FaqSuccess
    * @apiUse FaqSuccess
    *
    * @apiSuccessExample {json} Success response:
    *     HTTPS 200 OK
    {
      "_id": "5a9292dc2023554038ff9f87",
      "answer": {
          "modifiedAt": "2018-02-25T10:41:32.663Z",
          "createdAt": "2018-02-25T10:41:32.663Z",
          "description": "Not answerd yet"
      },
      "question": {
          "description": "Is there discount for children?",
          "askedBy": "5a8157014d99ed52700bc99f",
          "modifiedAt": "2018-02-25T10:41:32.663Z",
          "createdAt": "2018-02-25T10:41:32.663Z"
      }
  }
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
    * $http.header("Authorization") = jwtwebtoken;
    *
    *@apiUse FaqSuccess
    * @apiSuccessExample {json} Success response:
    *     HTTPS 200 OK
    {
      "page": 1,
      "total_docs": 8,
      "total_pages": 1,
      "per_page": 10,
      "docs": [
          {
              "_id": "5a92752a45475524e0619b03",
              "__v": 0,
              "answer": {
                  "modifiedAt": "2018-02-25T08:34:50.743Z",
                  "createdAt": "2018-02-25T08:34:50.743Z",
                  "description": "Not answerd yet"
              },
              "question": {
                  "description": "How long your service stay during the evening?",
                  "askedBy": "5a8157014d99ed52700bc99f",
                  "modifiedAt": "2018-02-25T08:34:50.743Z",
                  "createdAt": "2018-02-25T08:34:50.743Z"
              }
          },
          {
              "_id": "5a9279a25bebbd257805293b",
              "__v": 0,
              "answer": {
                  "modifiedAt": "2018-02-25T08:53:54.404Z",
                  "createdAt": "2018-02-25T08:53:54.404Z",
                  "description": "Not answerd yet"
              },
              "question": {
                  "description": "At what time is train service starts?",
                  "askedBy": "5a8157014d99ed52700bc99f",
                  "modifiedAt": "2018-02-25T08:53:54.404Z",
                  "createdAt": "2018-02-25T08:53:54.404Z"
              }
          },
          {
              "_id": "5a927aa89a08a935dc02634d",
              "__v": 0,
              "answer": {
                  "modifiedAt": "2018-02-25T08:58:16.609Z",
                  "createdAt": "2018-02-25T08:58:16.609Z",
                  "description": "Not answerd yet"
              },
              "question": {
                  "description": "At what time is train service starts?",
                  "askedBy": "5a8157014d99ed52700bc99f",
                  "modifiedAt": "2018-02-25T08:58:16.609Z",
                  "createdAt": "2018-02-25T08:58:16.609Z"
              }
          },
          {
              "_id": "5a927ae5419ffa2c50ab62c3",
              "__v": 0,
              "answer": {
                  "modifiedAt": "2018-02-25T08:59:17.009Z",
                  "createdAt": "2018-02-25T08:59:17.009Z",
                  "description": "Not answerd yet"
              },
              "question": {
                  "description": "At what time is train service starts?",
                  "askedBy": "5a8157014d99ed52700bc99f",
                  "modifiedAt": "2018-02-25T08:59:17.009Z",
                  "createdAt": "2018-02-25T08:59:17.009Z"
              }
          },
          {
              "_id": "5a9292dc2023554038ff9f87",
              "__v": 0,
              "answer": {
                  "modifiedAt": "2018-02-25T10:41:32.663Z",
                  "createdAt": "2018-02-25T10:41:32.663Z",
                  "description": "Not answerd yet"
              },
              "question": {
                  "description": "Tesfaye Belachew Abebe",
                  "askedBy": "5a8157014d99ed52700bc99f",
                  "modifiedAt": "2018-02-25T10:41:32.663Z",
                  "createdAt": "2018-02-25T10:41:32.663Z"
              }
          },
          {
              "_id": "5a92b5f3f6b32946a899d127",
              "__v": 0,
              "answer": {
                  "modifiedAt": "2018-02-25T13:11:15.939Z",
                  "createdAt": "2018-02-25T13:11:15.939Z",
                  "description": "Not answerd yet"
              },
              "question": {
                  "description": "Is there any charter train for special events",
                  "askedBy": "5a8157014d99ed52700bc99f",
                  "modifiedAt": "2018-02-25T13:11:15.939Z",
                  "createdAt": "2018-02-25T13:11:15.939Z"
              }
          }
        ]
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
  * $http.header("Authorization") = jwtwebtoken;
  *
  * @apiUse FaqSuccess
  *
  * @apiSuccessExample {json} Success response:
   *     HTTPS 200 OK
   {
       "faqs": [
           {
               "_id": "5a92b5f3f6b32946a899d127",
               "question": {
                   "askedBy": {
                       "_id": "5a8157014d99ed52700bc99f",
                       "email": "ayele.gobeze@gmail.com",
                       "phone": "251-917-123456",
                       "userType": "passenger",
                       "createdAt": "2018-02-12T08:57:00.000Z",
                       "modifiedAt": "2018-02-12T08:57:00.000Z"
                   },
                   "description": "Is there any charter train for special events",
                   "dateAsked": "25-Feb-2018 04:11 PM"
               },
               "answer": {
                   "description": "Not answerd yet",
                   "dateAnswerd": "25-Feb-2018 04:11 PM"
               },
               "request": {
                   "method": "GET",
                   "url": "http://localhost/faqs/search/charter"
               }
           },
           {
               "_id": "5a92b72364f0582538373c70",
               "question": {
                   "askedBy": {
                       "_id": "5a8157014d99ed52700bc99f",
                       "email": "ayele.gobeze@gmail.com",
                       "phone": "251-917-123456",
                       "userType": "passenger",
                       "createdAt": "2018-02-12T08:57:00.000Z",
                       "modifiedAt": "2018-02-12T08:57:00.000Z"
                   },
                   "description": "Is there any charter train for special events",
                   "dateAsked": "25-Feb-2018 04:16 PM"
               },
               "answer": {
                   "description": "Not answerd yet",
                   "dateAnswerd": "25-Feb-2018 04:16 PM"
               },
               "request": {
                   "method": "GET",
                   "url": "http://localhost/faqs/search/charter"
               }
           },
           {
               "_id": "5a957763f45a380610389b8e",
               "question": {
                   "askedBy": {
                       "_id": "5a8157014d99ed52700bc99f",
                       "email": "ayele.gobeze@gmail.com",
                       "phone": "251-917-123456",
                       "userType": "passenger",
                       "createdAt": "2018-02-12T08:57:00.000Z",
                       "modifiedAt": "2018-02-12T08:57:00.000Z"
                   },
                   "description": "Is there any charter train for special events",
                   "dateAsked": "27-Feb-2018 06:21 PM"
               },
               "answer": {
                   "description": "Not answerd yet",
                   "dateAnswerd": "27-Feb-2018 06:21 PM"
               },
               "request": {
                   "method": "GET",
                   "url": "http://localhost/faqs/search/charter"
               }
           }
       ]
   }
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
  * $http.common("Authorization") = jwtwebtoken;
  *
  * @apiUse FaqSuccess
  *
  * @apiSuccessExample {json} Success response:
   *     HTTPS 200 OK
   {
       "_id": "5a92b72364f0582538373c70",
       "__v": 0,
       "answer": {
           "modifiedAt": "2018-02-25T13:16:19.154Z",
           "createdAt": "2018-02-25T13:16:19.154Z",
           "description": "Not answerd yet"
       },
       "question": {
           "description": "Is there any charter train for special events",
           "askedBy": "5a8157014d99ed52700bc99f",
           "modifiedAt": "2018-02-25T13:16:19.154Z",
           "createdAt": "2018-02-25T13:16:19.154Z"
       }
   }
   *
   * @apiUse UnauthorizedError
  */
 router.get('/:id', faqController.findById);
 /**
  * @api {put} /faqs/:id Update Faq
  * @apiName putFaq
  * @apiGroup Faq
  * @apiDescription Update Faq
  * @apiVersion 0.1.0
  * @apiPermission passnger
  *
  * @apiUse FaqSuccess
  *
  * @apiParamExample {json} Request-Example
  *     {
  *       "id": "5a8b5a4e7474781c44dfc65e"
  *     }
  *
  * @apiRequestExample Request-Example
  * {
  * "question": {
  *     "description": "Is there any charter train for special events?"
  * }
  *}
  *
  *@apiSuccessExample Response-Success-Example
  *
  {
    "_id": "5a92b72364f0582538373c70",
    "question": {
        "askedBy": "5a8157014d99ed52700bc99f",
        "description": "Is there any charter train for special events?",
        "dateAsked": "25-Feb-2018 04:16 PM"
    },
    "answer": {
        "description": "Not answerd yet",
        "dateAnswerd": "25-Feb-2018 04:16 PM"
    },
    "request": {
        "method": "PUT",
        "url": "http://localhost/faqs/5a92b72364f0582538373c70"
    }
}
  *@apiUse UnauthorizedError
  *@apiUse InternalServerError
  */
router.put('/:id', faqController.update);

 /**
  * @api {delete} /faqs/:id Delete a faq
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
  * $http.header.("Authorization") = jwtwebtoken;
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
