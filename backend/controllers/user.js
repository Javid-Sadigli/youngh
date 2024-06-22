const path = require('path');
const sharp = require('sharp');

const fileUploadController = require('./fileUpload');

module.exports = {
    POST_Upload_Profile_Picture : (req, res, next) => {

        let responseSent = false;
        const username = req.query.username;

        if(!username && !responseSent)
        {
            return res.json({
                error : "Username is required"
            });
        }
        if(!req.file && !responseSent)
        {
            return res.json({
                message : 'No file uploaded'
            });
        }

        const uploadDir = fileUploadController.profilePhoto.uploadDir; 
        const outputFileName = path.join(uploadDir, `${username}.webp`);

        sharp(req.file.buffer).webp({
            quality : 80
        }).toFile(outputFileName).then(() => {
            if(!responseSent)
            {
                res.json({
                    message : 'File uploaded successfully', 
                    file : `${username}.webp`
                });
                responseSent = true;
            }
        }).catch((err) => {
            if(responseSent)
            {
                console.log(err);
                res.json({
                    error : err
                });
                responseSent = true;
            }
        });
    }
};