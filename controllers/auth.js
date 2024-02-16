module.exports.GET_Sign_In = (req, res, next) => {
    res.render('signin', {
        PageTitle : 'Sign In'
    }); 
}; 

module.exports.GET_Sign_Up = (req, res, next) => {
    res.render('signup', {
        PageTitle : 'Sign Up'
    }); 
};