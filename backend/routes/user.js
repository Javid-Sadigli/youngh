const express = require('express'); 
const router = express.Router();

// Controllers 
const fileUploadController = require('../controllers/fileUpload');
const userController = require('../controllers/user');

/* Start handling */ 
router.post(
    '/upload/profile_picture',  
    fileUploadController.profilePhoto.upload.single('image'), 
    userController.POST_Upload_Profile_Picture
);
/* End handling */ 

module.exports = router;