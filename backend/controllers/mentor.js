const User = require('../models/user');

module.exports = {
    GET_Filtered_Mentors : (req, res, next) => {
        const count = parseInt(req.query.count) || 9; 
        const skip = parseInt(req.query.skip) || 0;
        let jobTitle, jobCategory, skills; 

        if(req.query.jobTitle)
        {
            jobTitle = req.query.jobTitle.replace("_", " ");
        }
        if(req.query.jobCategory)
        {
            jobCategory = req.query.jobCategory.replace("_", " ");
        }
        if(req.query.skills)
        {
            skills = req.query.skills.split("-");
            const length = skills.length;
            for(let i = 0; i < length; i++)
            {
                skills[i] = skills[i].replace("_", " ");
            }
        }

        let query = {
            userType :'mentor'
        };

        if(jobTitle)
        {
            query.jobTitle = jobTitle;
        }
        if(jobCategory)
        {
            query.jobCategory = jobCategory;
        }
        if(skills)
        {
            query.skills = {
                $all : skills
            };
        }
        
        let responseSent = false;

        User.find(query).sort({
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