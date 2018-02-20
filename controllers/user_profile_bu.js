const express = require('express');
const router  = express.Router();

//load custom modules
const UserProfile  = require('../models/user_profile');

/**
*1. save profile image detail info on mongodb
**/
function uploadImage ( req, res, next){
    // Create a new image model and fill the properties
    var newImg = req.file;
    var NewImage = new UserProfile();
    NewImage.filename     = newImg.filename;
    NewImage.originalName = newImg.originalname;
    NewImage.desc         = newImg.desc
    NewImage.save(function(err,img) {
        if (err) {
            return res.sendStatus(400);
        }
        res.status(201).send({profileImage : img });
        console.log(img);
    });
}

/**
*2. Get all uploaded images
**/
function getAllUserProfile(req, res, next){
    // use lean() to get a plain JS object
    // remove the version key from the response
    UserProfile.find({}, '-__v').lean().exec((err, images) => {
        if (err) {
            res.sendStatus(400);
        }
        // Manually set the correct URL to each image
        for (var i = 0; i < images.length; i++) {
            var img = images[i];
            img.url = req.protocol + '://' + req.get('host') + '/images/' + img._id;
        }
        res.json({profileImage: images});
    })
}
/**
*3. update/change/edit profile image
**/
function updateImageInfo(req,res){
  var updateUserProfile= req.file;
  console.log(updateUserProfile.filename+'\n');
  var imageId= req.params.imageId;
  var modifiedAt = new Date();
  UserProfile.findOneAndUpdate({_id:imageId},
      {$set:{
        desc     : req.body.desc,
        originalName  : req.body.originalName,
        filename  : updateUserProfile.filename,
        created : modifiedAt
        }
    },
    {new:true},//return update user profile

  function(err, updatedUserProfile){
          if(err){
            console.log('Error occurred. Detail Error message: ' +err);
          }else{
            console.log(updatedUserProfile);
            res.send(updatedUserProfile);
            //res.status(204);//User succesfully updated
          }
         });
}
/**
*4. get image by id
**/
function getImageById(req, res){
    console.log('Getting image by id:');
    UserProfile.findOne({ _id:req.params.imageId}).exec(function(err,retrievedImage){
      if (err) {
        res.send('Error has occurred\n Error:' +err);
      }
      else{
        console.log(retrievedImage);
        res.json(retrievedImage);
      }
});
}
/**
*5. Delete/remove profile image
**/

function deleteImageById(req,res){
  var imageId=req.params.imageId;
  UserProfile.findOneAndRemove({_id:imageId},
         function(err, retrievedImage){
          if(err)  res.send('Error Deleteing');
           else  {res.send("No content found");
           //res.json(retrievedImage);
         }
         });
}

module.exports = {
  uploadImage    : uploadImage,
  getAllUser     : getAllUserProfile,
  updateImageInfo: updateImageInfo.
  getImageById   : getImageById,
  deleteImageById: deleteImageById
}
