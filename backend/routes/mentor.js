const express = require('express'); 
const router = express.Router();

// Controllers 
const mentorController = require('../controllers/mentor');

/* Start handling */ 
router.get('/get/filtered', mentorController.GET_Filtered_Mentors);
/* End handling */ 

module.exports = router;