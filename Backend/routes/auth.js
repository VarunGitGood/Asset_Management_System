const { Router } = require("express");
const express = require("express");
const routes = express.Router();


const {
    signIn, login, getUser
} = require('../controllers/authControllers')


routes.route('/api/v1/auth/signup').post(signIn)
routes.route('/api/v1/auth/login').post(login)
routes.route('/api/v1/auth/getUser').get(getUser)


module.exports = routes