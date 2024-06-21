const variables = require('./variables'); 

// Modules
const express = require('express'); 
const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

// Controllers 
const consoleController = require('./controllers/console');

const app = express();
const server = http.createServer(app); 

// Routes 
const authRouter = require('./routes/auth'); 

// Module middlewares
app.use(express.json());
app.use(cors());

/* Start handling */
app.use(consoleController.LOG_Request);

app.use('/api/auth', authRouter);

app.use(consoleController.LOG_Not_Found);
/* End handling */

// Listening server 
mongoose.connect(variables.DATABASE_URI).then((result) => {
    server.listen(variables.port, () => {
        console.log(`\n\nServer succesfully started on port ${variables.port}.\n`);
    });     
});



