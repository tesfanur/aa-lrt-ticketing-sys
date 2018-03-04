//var express = require('express');
const multer = require('multer');
const path = require('path');

const utils = require('../lib/utils');
const Image = require('../models/profileImage');
//var router = express.Router();

//========================================
const date = new Date();
const storage = multer.diskStorage({
  destination: './images/',
  filename: function(req, file, cb) {
    cb(null, 'Profile_Img_' +
      utils.formatDateToString(date) + '_' +
      (Math.random().toString(36)).slice(2, 10) +
      path.extname(file.originalname));
  },
  onFileUploadStart: function() {
    console.log("Upload is starting...");
  },
  onFileUploadComplete: function() {
    console.log("File uploaded");
  }

});

upload = multer({
  storage: storage
}).single('image');
module.exports = upload;