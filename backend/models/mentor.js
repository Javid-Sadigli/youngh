const mongoose = require('mongoose'); 

const Schema = mongoose.Schema; 

const MentorSchema = new Schema({
    username : {
        type : String, 
        required : true
    }, 
    email : {
        type : String, 
        required : true
    }, 
    password : {
        type : String, 
        required : true
    },
    description : {
        type : Text,
        required : true
    }
}); 

module.exports = mongoose.model('Mentor', MentorSchema); 