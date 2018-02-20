//load first party module dependecies
var express = require('express');

//load local/custom module dependecies
var UserProfileController = require('../controllers/user_profile');
var uploadImage = require('../controllers/imageupload');
var authenticate = require('../lib/middleware/authenticate').authenticate;

//instantiate router object
var router  = express.Router();
// module.exports = {
//     create    : createUserProfile,
//     findAll   : findAllUserProfile,
//     findById  : findUserProfileById,
//     update    : updateUserProfileInfo,
//     delete    : deleteUserProfileById,
//     paginate  : findUserProfileByPagination,
//     //findByName: findUserProfileByName,
//     findByCustomId:getUserProfileByCustomId,
//     searchByName : searchUserProfileByName
// }

//create  new Profile using validation
//router.post('/', uploadImage, UserProfileController.uploadImage);
router.post('/', authenticate, UserProfileController.create);

// Retrieve all Profiles
router.get('/',authenticate,UserProfileController.findAll);

// Retrieve single Profile with UserProfileControllerId
router.get('/:id',authenticate, UserProfileController.findById);

// Update Profile with userProfileId
router.put('/:id',authenticate, UserProfileController.update);

// Delete Profile with userProfileId
router.delete('/:id', UserProfileController.delete);

//router.get('/', UserProfileController.homepage);

//expose router to other files
module.exports =router;
