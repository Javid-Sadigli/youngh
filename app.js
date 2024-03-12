const variables = require('./variables');

// Javid test 2

// Modules 
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const mongoddbSessionStore = require('connect-mongodb-session')(session);

// Controllers
const ConsoleController = require('./controllers/console'); 
const UserController = require('./controllers/user');
const MainController = require('./controllers/main');

// Routes
const UserRouter = require('./routes/user');
const AuthRouter = require('./routes/auth');

const app = express();
const store = new mongoddbSessionStore({
    uri : variables.DATABASE_URI, 
    collection :'sessions'
});

// Settings
app.set('view engine', 'ejs');
app.set('views', 'views');

// Using the needed modules 
app.use(bodyParser.urlencoded({extended : false})); 
app.use(express.static(path.join(variables.mainDir, 'public')));
app.use(session({
    secret : 'M!</(cXYLWc&(RoyMbQ)Ly@j;9YTK3iw', 
    resave : false, 
    saveUninitialized : false, 
    store : store
})); 


app.use(ConsoleController.LOG_Request); 
app.use(MainController.SET_Request_User); 

/* Start handling */
app.use(AuthRouter); 
/* End handling */ 

app.use(ConsoleController.LOG_Not_Found); 
app.use(MainController.SEND_Error_Page);

// Connect to database and start server
mongoose.connect(variables.DATABASE_URI).then(function(result)
{
    app.listen(variables.port, variables.hostname, function()
    {
        console.log(`\n\nServer succesfully started at http://${variables.hostname}:${variables.port}/\n`);
    });
}).catch(function(error)
{
    console.log(error);
});
