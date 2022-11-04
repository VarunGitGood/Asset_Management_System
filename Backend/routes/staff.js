const { Router } = require("express");
const express = require("express");
const routes = express.Router();


const {
    getAllStaff,getStaffById
} = require('../controllers/staffControllers');

routes.route('/api/v1/staff').get(getAllStaff)
routes.route('/api/v1/staffid').post(getStaffById)



module.exports = routes