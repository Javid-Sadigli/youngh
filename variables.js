const path = require('path');

module.exports = {
    DATABASE_URI : 'mongodb+srv://theyoungh:NPY4PLn20iopOH8w@cluster0.z3bge2n.mongodb.net/?retryWrites=true&w=majority', 
    hostname : 'localhost', 
    port : 3000, 
    mainDir : path.dirname(require.main.filename)
};