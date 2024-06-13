const path = require('path');

module.exports = {
    DATABASE_URI : 'mongodb+srv://theyoungh:NPY4PLn20iopOH8w@cluster0.z3bge2n.mongodb.net/youngh?retryWrites=true&w=majority', 
    port : process.env.PORT || 5000, 
    mainDir : path.dirname(require.main.filename)
};