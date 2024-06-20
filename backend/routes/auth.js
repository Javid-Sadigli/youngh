const express = require('express'); 
const router = express.Router();

// Controllers 
const authController = require('../controllers/auth');

/* Start handling */ 
router.post('/register', authController.POST_Register); 
router.post('/login', authController.POST_Login); 
/* End handling */ 

module.exports = router;