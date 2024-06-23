const variables = require('./variables'); 

// Modules
const express = require('express'); 
const http = require('http');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

// Controllers 
const consoleController = require('./controllers/console');

const app = express();
const server = http.createServer(app); 

// Routes 
const authRouter = require('./routes/auth'); 
const userRouter = require('./routes/user');
const mentorRouter = require('./routes/mentor');

// Module middlewares
app.use(express.json());
app.use(cors());
app.use('/public', express.static(path.join(
    variables.mainDir,
    'public'
)));

/* Start handling */
app.use(consoleController.LOG_Request);

app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/mentor', mentorRouter);

app.use(consoleController.LOG_Not_Found);
/* End handling */

// Listening server 
mongoose.connect(variables.DATABASE_URI).then((result) => {
    server.listen(variables.port, () => {
        console.log(`\n\nServer succesfully started on port ${variables.port}.\n`);
    });     
});



