/**
*load third party modules
*/
var express = require('express');
var router  = express.Router();
/**
*load local/custom modules
*/
var userController = require('../controllers/user');
var authenticate =require('../lib/middleware/authenticate').authenticate;
/**
*Mount all routes on router express instance
*/
//create  new user using validation
router.post('/signup',userController.create);
// Delete user with userId
router.post('/login', userController.login);

// Retrieve all users
router.get('/',authenticate, userController.findAll);

// Retrieve single user with userControllerId
router.get('/:userId',authenticate, userController.findById);

// Update user with userId
router.put('/:userId',authenticate, userController.update);

// Delete user with userId
router.delete('/:userId',authenticate, userController.delete);


//router.get('/', userController.homepage);

//expose router to other files
module.exports =router;
