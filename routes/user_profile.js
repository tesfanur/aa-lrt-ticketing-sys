//load first party module dependecies
var express = require('express');

//load local/custom module dependecies
var UserProfileController = require('../controllers/user_profile');
var uploadImage = require('../controllers/imageupload');

//instantiate router object
var router  = express.Router();

//create  new Profile using validation
//router.post('/', uploadImage, UserProfileController.uploadImage);
router.post('/',  UserProfileController.create);

// Retrieve all Profiles
router.get('/',UserProfileController.findAll);

// Retrieve single Profile with UserProfileControllerId
router.get('/:id', UserProfileController.findById);

// Update Profile with userProfileId
router.put('/:id', UserProfileController.update);

// Delete Profile with userProfileId
router.delete('/:id', UserProfileController.delete);

//search user profile by username
router.get('/search/:username', UserProfileController.searchByUsername);

//expose router to other files
module.exports =router;
