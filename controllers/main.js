const User = require('../models/user');

module.exports.SET_Request_User = (req, res, next) => {
    
    const sessionId = req.session.userId;
    if(sessionId)
    {
        User.findById(sessionId).then((user) => {
            if(user)
            {
                req.user = user;
                req.loggedIn = true;
                next();
            }
            else 
            {
                next();
            }
        }).catch((err) => {
            console.log(err);
        }); 
    }
    else
    {
        next();
    } 
}; 

module.exports.SEND_Error_Page = (req, res, next) => {
    res.send('<h1 align="center">404 Not Found</h1>');
}; 