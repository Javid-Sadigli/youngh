// Models 
const Mentor = require('../models/mentor'); 
const Mentee = require('../models/mentee');

module.exports = {
    POST_Register : (req, res, next) => {
        const userType = req.query.user_type;

        const username = req.body.username; 
        const email = req.body.email;
        const password =  req.body.password;

        let responseSent = false;
        
        switch (userType) 
        {
            case "mentor":
                const description = req.body.description;
                Mentor.findOne({username : username }).then((mentor) => {
                    if(!responseSent) 
                    {
                        if(mentor)  
                        {
                            res.json({
                                message : "Username already exists"
                            });
                            responseSent = true;
                        }
                        else 
                        {
                            return Mentor.findOne({email : email});
                        }
                    }
                }).then((mentor) => {
                    if(!responseSent) 
                    {
                        if(mentor)
                        {
                            res.json({
                                message : "Email already exists"
                            }); 
                            responseSent = true;
                        }
                        else 
                        {
                            const newMentor = new Mentor({
                                username : username, 
                                email : email, 
                                password :  password, 
                                description : description
                            }); 
                            return newMentor.save();
                        }
                    }
                }).then((newMentor) => {
                    if(!responseSent)
                    {
                        if(newMentor)
                        {
                            res.json({
                                message : "Mentor created successfully", 
                                mentor : newMentor
                            });
                            responseSent = true;
                        }
                    }
                }).catch((err) => {
                    console.log(err);
                    if(!responseSent)
                    {
                        res.json({
                            error : err
                        });
                    }
                });
                break;
            case "mentee":
                Mentee.findOne({username : username }).then((mentee) => {
                    if(!responseSent)
                    {
                        if(mentee)
                        {
                            res.json({
                                message : "Username already exists"
                            }); 
                            responseSent = true;
                        }
                        else 
                        {
                            return Mentee.findOne({email : email});
                        }
                    }
                }).then((mentee) => {
                    if(!responseSent)
                    {
                        if(mentee)
                        {
                            res.json({
                                message : "Email already exists"
                            }); 
                            responseSent = true;
                        }
                        else 
                        {
                            const newMentee = new Mentee({
                                username : username, 
                                email : email, 
                                password :   password
                            }); 
                            return newMentee.save();
                        }
                    }
                }).then((newMentee) => {
                    if(!responseSent)
                    {
                        if(newMentee)
                        {
                            res.json({
                                message : "Mentee created successfully", 
                                mentee : newMentee
                            });
                            responseSent = true;
                        }
                    }
                }).catch((err) => {
                    console.log(err);
                    if(!responseSent)
                    {
                        res.json({
                            error : err
                        });
                    }
                });
                break;
            default:
                if(!responseSent)
                {
                    res.json({
                        message : "Invalid user type"
                    });
                }
                break;
        }
    }
}; 