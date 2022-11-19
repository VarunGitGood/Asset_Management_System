const { Router } = require("express");
const express = require("express");
const routes = express.Router();



const {
    signIn, login
} = require('../controllers/authControllers')


routes.route('/api/v1/auth/signup').post(signIn)
routes.route('/api/v1/auth/login').post(login)


module.exports = routes