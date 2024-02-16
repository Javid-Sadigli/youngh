const express = require('express');

const Router = express.Router();

const AuthController = require('../controllers/auth');

Router.get('/signin', AuthController.GET_Sign_In); 
Router.get('/signup', AuthController.GET_Sign_Up); 

module.exports = Router;