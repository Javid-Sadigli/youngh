const mongoose = require('mongoose'); 

const Schema = mongoose.Schema; 

const UserSchema = new Schema({
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
        type : String
    }, 
    userType : {
        type : String, 
        default : 'mentee'
    }, 
    stars : {
        5 : {
            type : Number
        }, 
        4 : {
            type : Number
        }, 
        3 : {
            type : Number
        }, 
        2 : {
            type : Number
        }, 
        1 : {
            type : Number
        }, 
        average : {
            type : Number
        }
    }
});

UserSchema.methods.addStars = function() 
{
    this.stars = {
        5 : 0,
        4 : 0,
        3 : 0,
        2 : 0,
        1 : 0,
        average : 0
    }; 
    return this.save();
};

module.exports = mongoose.model('User', UserSchema);