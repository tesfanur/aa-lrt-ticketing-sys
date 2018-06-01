/**
*load third party modules
*/
var express = require('express');
var router  = express.Router();
/**
*load local/custom modules
*/
var userController = require('../controllers/user');
// ------------------------------------------------------------------------------------------
// User Success Response
// ------------------------------------------------------------------------------------------
/**
 * @apiDefine UserSuccess
 *  @apiVersion 0.1.0
 * @apiSuccess {Object} _id User's Auto generated mongodb Object Unique Id
 * @apiSuccess {String} email User's email address
 * @apiSuccess {String} userType User's Type/Role, default value: passenger
 * @apiSuccess {Date} createdAt User's registration date time
 * @apiSuccess {Date} modifiedAt User's info delete date time
*/
/**
 * @apiDefine UserSuccess
 * @apiVersion 0.2.0
 * @apiSuccess {Object} _id User's Auto generated mongodb Object Unique Id
 * @apiSuccess {String} email User's email address
 * @apiSuccess {String} phone User's phone number
 * @apiSuccess {String} userType User's Type/Role, default value: passenger
 * @apiSuccess {Date} createdAt User's registration date time
 * @apiSuccess {Date} modifiedAt User's info delete date time
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
 * @apiDefine UnauthorizedError
 * @apiVersion 0.2.0
 *
 * @apiError Unauthorized Only authenticated users can access the endpoint.
 *
 * @apiErrorExample  Unauthorized response:
 *     HTTP 401 Unauthorized
 *     {
 *      "query_result":"Access denied"
 *     }
 */

/**
 * @api {post} /users/signup Signup User
 * @apiName CreateUser
 * @apiGroup User
 * @apiDescription Allows new users to signup/create account
 * @apiVersion 0.1.0
 * @apiPermission none
 * @apiParam {String} email User's email address
 * @apiParam {String} password User's password
 * @apiParam {String} confirmPassword User's password confirmation
 * @apiParam {String} phone User's phone number
 * @apiSuccess(Success 201) {String} Authorization jwtwebtoken is generated & is set to header
 *
 * @apiSuccess(Success 201) {String} _id User's Object id
 * @apiSuccess(Success 201) {String} email User's email address
 * @apiSuccess(Success 201) {String} userType User's user type/role
 * @apiSuccess(Success 201) {Date}   createdAt User's registeration date time
 * @apiSuccess(Success 201) {Date}   modifiedAt User's data update date time
 *
 * @apiParamExample Request Example
 *    HTTPS 201 OK
 * {
 *   "email" : "evana.mangato@gmail.com",
 *  "password" : "TestPassword@123",
 *  "confirmPassword":"TestPassword@123",
 *  "phone":"251-917-123456"
 * }
 *
 * @apiSuccessExample Response Example
 *
 * {
 *  "_id": "5a845264c73ad33fbc6037a4",
 *  "email": "evana.mangato@gmail.com",
 *  "phone": "251-917-123456",
 *  "userType": "passenger",
 *  "createdAt": "2018-02-14T15:14:44.974Z",
 *  "modifiedAt": "2018-02-14T15:14:44.974Z"
 * }
 *@apiError Validation error
 * {
 *  "validation-errors": [
 *      {
 *          "location": "body",
 *          "param": "email",
 *          "msg": "Email you entered is invalid. Please try again",
 *          "value": "evana.mangatogmail.com"
 *      }
 *  ]
 * }
 */
 function create() { return; }
router.post('/signup',userController.create);

/**
 * @api {post} /users/login Login User
 * @apiName LoginUser
 * @apiGroup User
 * @apiDescription Allows registerd users to login
 * @apiVersion 0.1.0
 * @apiParam {String} email User's email address
 * @apiParam {String} password User's password
 *
 * @apiSuccess {String} Authorization jwtwebtoken is generated & set to header
 *
 * @apiUse UserSuccess
 *
 * @apiParamExample Request Example
 *
 * {
 * "email" : "evana.mangato@gmail.com",
 *  "password" : "TestPassword@123"
 * }
 *
 * @apiSuccessExample Response Example
 *
 * {
 *  "_id": "5a845264c73ad33fbc6037a4",
 *  "email": "evana.mangato@gmail.com",
 *  "phone": "251-917-123456",
 *  "userType": "passenger",
 *  "createdAt": "2018-02-14T15:14:44.974Z",
 *  "modifiedAt": "2018-02-14T15:14:44.974Z"
 * }
 *@apiUse UnauthorizedError
 */
function login() { return; }
router.post('/login', userController.login);
/**
 * @api {GET} /users/ Find All Users
 * @apiName FindAllUsers
 * @apiGroup User
 * @apiDescription Lists all registerd users
 * @apiVersion 0.1.0
 *
 * @apiUse UserSuccess
 *
 * @apiSuccessExample Response Example
 *
 * [
  *  {
  *      "_id": "5a845264c73ad33fbc6037a4",
  *      "email": "evana.mangato@gmail.com",
  *      "phone": "251-917-123456",
  *      "userType": "passenger",
  *      "createdAt": "2018-02-14T15:14:44.974Z",
  *      "modifiedAt": "2018-02-14T15:14:44.974Z"
  *  },
  *  {
  *      "_id": "5a84482ea9348b46d4fc17ba",
  *      "email": "Esubalew.belachew@gmail.com",
  *      "phone": "251-917-123456",
  *      "userType": "passenger",
  *      "createdAt": "2018-02-14T14:31:10.928Z",
  *      "modifiedAt": "2018-02-14T14:31:10.928Z"
  *  },
  *  {
  *      "_id": "5a81dbf050e5800d5c2c0019",
  *      "email": "tesfayee.belachew@gmail.com",
  *      "phone": "251-917-123456",
  *      "userType": "passenger",
  *      "createdAt": "2018-02-12T18:24:48.136Z",
  *      "modifiedAt": "2018-02-12T18:24:48.136Z"
  *  },
  *  {
  *      "_id": "5a815c1b205e0c14546476f6",
  *      "email": "sisay.belachew@gmail.com",
  *    "phone": "251-917-123456",
  *      "userType": "passenger",
  *      "createdAt": "2018-02-12T09:19:23.300Z",
  *      "modifiedAt": "2018-02-12T09:19:23.300Z"
  *  },
  *  {
  *      "_id": "5a8159adf15a7618040ac938",
  *      "email": "chuchu.belachew@gmail.com",
  *      "phone": "251-917-123456",
  *      "userType": "passenger",
  *      "createdAt": "2018-02-12T09:09:01.240Z",
  *      "modifiedAt": "2018-02-12T09:09:01.240Z"
  *  }
  * ]
  *@apiUse UnauthorizedError
 */
function findAll() { return; }
router.get('/',userController.findAll);
/**
 * @api {get} /users/:userId Get User
 * @apiName GetUser
 * @apiGroup User
 * @apiHeader {String} Authorization JWT token value
 * @apiDescription Find user by id
 * @apiVersion 0.1.0
 * @apiPermission authenticated user
 *
 * @apiHeader  Authorization JWT token value
 * @apiHeader  [Accept=application/json] application/json
 * @apiSatus {text} 401/Unauthorized.
 * @apiStatus {text} 403/Access Denied

 * $http.header("Authorization") = jwtwebtoken;
 *
 * @apiSuccess {String} _id The User id
 *
 *@apiUse UserSuccess
 *
 * @apiParam {String} _id The User id
 * @apiSuccessExample Response Example
 *     HTTPS 200 OK
 * {
 *  "_id": "5a845264c73ad33fbc6037a4",
 *  "email": "evana.mangato@gmail.com",
 *  "phone": "251-917-123456",
 *  "userType": "passenger",
 *  "createdAt": "2018-02-14T15:14:44.974Z",
 *  "modifiedAt": "2018-02-14T15:14:44.974Z"
 * }
 *@apiError not found error
 * {
 *    "ERROR": "NO USER FOUND"
 * }
 *@apiUse UnauthorizedError
 */
router.get('/:userId',userController.findById);

router.get('/search/:username',userController.findByUsername);
/**
 * @api {put} /users/:userId Update User
 * @apiName putUser
 * @apiGroup User
 * @apiDescription Allows registerd user to update their account
 * @apiVersion 0.1.0
 * @apiPermission none
 *
 * @apiUse UserSuccess
 *
 * @apiRequestExample Response Example
 * {
 *  "email": "evana.mangato@gmail.com",
 *  "phone": "251-917-088845",
 *  "userType": "admin"
 * }
 *@apiSuccessExample Response Example
 *{
 *    "_id": "5a845264c73ad33fbc6037a4",
 *    "email": "evana.mangato@gmail.com",
 *    "phone": "251-917-123456",
 *    "userType": "admin",
 *    "createdAt": "2018-02-14T15:14:44.974Z",
 *    "modifiedAt": "2018-02-14T15:14:44.974Z"
 * }
 *@apiUse UnauthorizedError
 */
router.put('/:userId', userController.update);
/**
 * @api {delete} /users/:userId Delete User
 * @apiName delete
 * @apiGroup User
 * @apiDescription Delete a user
 * @apiVersion 0.1.0
 * @apiUse UserSuccess
 *
 * @apiRequestExample Response Example
 * {
 *  "email": "evana.mangato@gmail.com",
 *  "phone": "251-917-088845",
 *  "userType": "admin"
 * }
 *@apiSuccessExample Response Example
 *{
 *    "_id": "5a845264c73ad33fbc6037a4",
 *    "email": "evana.mangato@gmail.com",
 *    "phone": "251-917-123456",
 *    "userType": "admin",
 *    "createdAt": "2018-02-14T15:14:44.974Z",
 *    "modifiedAt": "2018-02-14T15:14:44.974Z"
 * }
 *@apiUse UnauthorizedError
 */
router.delete('/:userId', userController.delete);
//findByPhone
router.get('/phone/:phoneNum', userController.findByPhone); 
router.get('/paginate', userController.paginate); 
/**
 * @api {get} /users/me/logout Logout User
 * @apiName logout
 * @apiGroup User
 * @apiDescription Logout a user
 * @apiVersion 0.1.0  
 * @apiSuccessExample Response Example
 *http status 204
 *http Authorization header is set to null 
 */
router.get('/me/logout', userController.logout);
//expose router to other files
module.exports =router;
