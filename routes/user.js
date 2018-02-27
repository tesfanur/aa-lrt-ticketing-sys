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
 * @apiSuccess {Object} _id User Auto generated mongodb object Id
 * @apiSuccess {String} email User email
 * @apiSuccess {String} userType User Type/Role
 * @apiSuccess {Date} createdAt User registration date time
 * @apiSuccess {Date} modifiedAt User info delete date time
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
 * @api {post} /users/signup Signup User
 * @apiName CreateUser
 * @apiGroup User
 * @apiDescription Creates a New User
 * @apiVersion 0.1.0
 * @apiPermission none
 * @apiParam {String} email User's email
 * @apiParam {String} password User's password
 * @apiParam {String} confirmPassword User's password confirmation
 * @apiParam {String} phone User's phone number
 *
 * @apiSuccess(Success 201) {json} User User's registration info
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
 * @api {post} /Users/login Login User
 * @apiName LoginUser
 * @apiGroup User
 * @apiDescription Allows registerd users to login
 * @apiVersion 0.1.0
 * @apiParam {String} email User's email address
 * @apiParam {String} password User's password
 *
 * @apiSuccess {json} User User's registration info
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
 *@apiError Authentication error
 * {
 *  "MESSAGE": "ACCESS FORBID"
 * }
 */
function login() { return; }
router.post('/login', userController.login);
/**
 * @api {GET} /Users/ find all users
 * @apiName FindAllUsers
 * @apiGroup User
 * @apiDescription list all registerd Users
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
 * @api {get} /Users/:userId Get User
 * @apiName GetUser
 * @apiGroup User
 * @apiDescription find user by id
 * @apiVersion 0.1.0
 * @apiPermission authenticated user
 *
 * @apiExample {js} Example usage:
 * $http.defaults.headers.common["Authorization"] = token;
 * $http.get(url)
 *   .success((res, status) => doSomethingHere())
 *   .error((err, status) => doSomethingHere());
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
/**
 * @api {put} /Users/:userId update User
 * @apiName update
 * @apiGroup User
 * @apiDescription update user info
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
 * @api {delete} /Users/:userId Delete User
 * @apiName delete
 * @apiGroup User
 * @apiDescription deletes a user
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
//expose router to other files
module.exports =router;
