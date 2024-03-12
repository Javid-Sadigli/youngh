const User = require('../models/user');

// Javid test 1

module.exports.GET_Sign_In = (req, res, next) => {
    if(!req.loggedIn)
    {
        return res.render('signin', {
            PageTitle : 'Sign In'
        }); 
    }
    next();
}; 

module.exports.GET_Sign_Up = (req, res, next) => {
    if(!req.loggedIn)
    {
        return res.render('signup', {
            PageTitle : 'Sign Up'
        }); 
    }
    next();
};

module.exports.POST_Sign_Up = (req, res, next) => {
    const username = req.body.username; 
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;

    let responseSent = false;

    if(password == confirmPassword)
    {
        User.findOne({
            email: email
        }).then((user) => {
            if(!user)
            {
                const newUser = new User({
                    username: username,
                    email: email,
                    password: password
                });
                return newUser.save(); 
            }
        }).then((user) => {
            if(!responseSent)
            {
                responseSent = true;
                res.redirect('/signin');
            }
        }).catch((err) => {
            console.log(err);
        });
    }
};

module.exports.POST_Sign_In = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    let responseSent = false;

    User.findOne({
        email : email, 
        password : password
    }).then((user) => {
        if(user && !responseSent)
        {
            req.session.userId = user._id;
            responseSent = true;
            res.redirect('/');
        }
    }).catch((err) => {
        console.log(err);
    });
};