// Models 
const User = require('../models/user');

module.exports = {
    POST_Register : (req, res, next) => {
        const userType = req.query.user_type;
        let responseSent = false;

        switch (userType) 
        {
            case "mentor": 
            case "mentee" : 
                break; 
            default : 
                res.json({
                    error : "Invalid user type"
                });
                responseSent = true;
                break;
        }

        const username = req.body.username; 
        const email = req.body.email;
        const password =  req.body.password;
        const description = req.body.description;

        if(!responseSent)
        {
            if(!username)
            {
                res.json({
                    error : "Username is required"
                }); 
            }
            if(!email) 
            {
                res.json({
                    error : "Email is required"
                });
                responseSent = true;
            }
            if(!password)
            {
                res.json({
                    error : "Password is required"
                });
                responseSent = true;
            }
            if(userType == "mentor" && !description)
            {
                res.json({
                    error : "Description is required for mentors"
                });
                responseSent = true;
            }
        }
        
        User.findOne({username : username}).then((user) => {
            if(!responseSent) 
            {
                if(user)
                {
                    res.json({
                        message : "Username already exists"
                    });
                    responseSent = true;
                }
                else 
                {
                    return User.findOne({email : email});
                }
            }
        }).then((user) => {
            if(!responseSent)
            {
                if(user)
                {
                    res.json({
                        message : "Email already exists"
                    });
                    responseSent = true;
                }
                else 
                {
                    const newUser = new User({
                        email : email, 
                        password :  password, 
                        username : username, 
                        user_type : userType, 
                        description : description
                    }); 
                    return newUser.save();
                }
            }
        }).then((user) => {
            if(!responseSent) 
            {
                res.json({
                    message : "User created successfully", 
                    user : user
                });
                responseSent = true;
            }
        });
        
    }, 

    POST_Login : (req, res, next) => {
        const username = req.body.username; 
        const password =  req.body.password;

        let responseSent = false;

        User.findOne({username : username}).then((user) => {
            if(!responseSent)
            {
                if(!user)
                {
                    res.json({
                        error : "User not found"
                    });
                    responseSent = true;
                }
                else 
                {
                    if(user.password == password) 
                    {
                        res.json({
                            message : "User logged in successfully", 
                            user : user
                        });
                        responseSent = true;
                    }
                    else 
                    {
                        res.json({
                            error : "Incorrect password"
                        });
                        responseSent = true;
                    }
                }
            }
        });
    }
}; 