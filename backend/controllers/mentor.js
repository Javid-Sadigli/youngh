const User = require('../models/user');

module.exports = {
    GET_Filtered_Mentors : (req, res, next) => {
        const count = parseInt(req.query.count) || 9; 
        const skip = parseInt(req.query.skip) || 0;
        
        let responseSent = false;

        User.find({
            userType : 'mentor'
        }).sort({
            'stars.average' : -1
        }).skip(skip).limit(count).then((mentors) => {
            if(!responseSent)
            {
                res.json({
                    message : 'Mentors found successfully',
                    count : count, 
                    skip : skip, 
                    mentors : mentors
                });
                responseSent = true;
            }
        }).catch((err) => {
            console.log(err);
            if(!responseSent)
            {
                res.json({
                    error : err
                });
                responseSent = true;
            }
        });
    }
};