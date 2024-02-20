const express = require('express');

const Router = express.Router();

const AuthController = require('../controllers/auth');

Router.get('/signin', AuthController.GET_Sign_In); 
Router.get('/signup', AuthController.GET_Sign_Up);

Router.post('/signup', AuthController.POST_Sign_Up); 
Router.post('/signin', AuthController.POST_Sign_In);

module.exports = Router;