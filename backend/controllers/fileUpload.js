const mainDir = require('../variables').mainDir;

const multer = require('multer');
const fs = require('fs');
const path = require('path');

const uploadDir = path.join(mainDir, 'public', 'profile_pictures');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

module.exports.profilePhoto = {
  upload : multer({
      storage : multer.memoryStorage(), 
      fileFilter : (req, file, cb) => {
          const allowedTypes = /jpeg|jpg|png|gif|webp/;
          const mimetype = allowedTypes.test(file.mimetype);
          const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
        
          if (mimetype && extname) {
            return cb(null, true);
          } else {
            cb(new Error('Only images are allowed'));
          }
      }, 
      limits: { fileSize: 1024 * 1024 * 5 }
  }), 
  uploadDir : uploadDir
};