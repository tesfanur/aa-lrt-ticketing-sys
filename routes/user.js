/**
*load third party modules
*/
var express = require('express');
var router  = express.Router();
/**
*load local/custom modules
*/
var userController = require('../controllers/user');

/**
 * @api {POST} /Users/signup signup User
 * @apiName CreateUser
 * @apiGroup User
 * @apiDescription Creates a new User
 *
 * @apiParam {String} email User's email
 * @apiParam {String} password User's password
 * @apiParam {String} phone User's phone number
 *
 * @apiParamExample Request Example
 *
 * {
 * "email" : "evana.mangato@gmail.com",
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
router.post('/signup',userController.create);
/**
 * @api {POST} /Users/login login User
 * @apiName LoginUser
 * @apiGroup User
 * @apiDescription Login registerd User
 *
 * @apiParam {String} email User's email
 * @apiParam {String} password User's password
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

router.post('/login', userController.login);
/**
 * @api {GET} /Users/ find all users
 * @apiName FindAllUsers
 * @apiGroup User
 * @apiDescription get all registerd Users
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
  *
 */

router.get('/',userController.findAll);
/**
 * @api {GET} /Users/:userId get User
 * @apiName findById
 * @apiGroup User
 * @apiDescription find user by id
 *
 * @apiSuccessExample Response Example
 * {{url}}/users/5a845264c73ad33fbc6037a4
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
 */
// Retrieve single user with userControllerId
router.get('/:userId',userController.findById);
/**
 * @api {POST} /Users/:userId update User
 * @apiName update
 * @apiGroup User
 * @apiDescription update user info
 *
 * @apiRequestExample Response Example
 * {{url}}/users/5a845264c73ad33fbc6037a4
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
 */
router.put('/:userId', userController.update);

// Delete user with userId
router.delete('/:userId', userController.delete);


//router.get('/', userController.homepage);

//expose router to other files
module.exports =router;
