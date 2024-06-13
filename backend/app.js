const variables = require('./variables'); 

// Modules
const express = require('express'); 
const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const server = http.createServer(app); 

// Routes 
const authRouter = require('./routes/auth'); 


// Module middlewares
app.use(bodyParser.urlencoded({extended : false}));

/* Start handling */
app.use('/auth', authRouter);
/* End handling */

// Listening server 
mongoose.connect(variables.DATABASE_URI).then((result) => {
    server.listen(variables.port, () => {
        console.log(`\n\nServer succesfully started on port ${variables.port}.\n`);
    });     
});