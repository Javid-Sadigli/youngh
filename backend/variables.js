const path = require('path');

module.exports = {
    // DATABASE_URI : 'mongodb+srv://nuruzadahamza:6I3mw5KoEy7sK8mi@cluster0.uru5z5g.mongodb.net/', 
    DATABASE_URI : 'mongodb+srv://theyoungh:NPY4PLn20iopOH8w@cluster0.z3bge2n.mongodb.net/youngh?retryWrites=true&w=majority', 
    port : process.env.PORT || 5000, 
    mainDir : path.dirname(require.main.filename)
};