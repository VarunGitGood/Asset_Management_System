const { Router } = require("express");
const express = require("express");
const routes = express.Router();


const {
    getAllStaff,getStaffById,getStaffActivity
} = require('../controllers/staffControllers');

routes.route('/api/v1/staff').get(getAllStaff)
routes.route('/api/v1/staffid').post(getStaffById)
routes.route('/api/v1/staffactivity').post(getStaffActivity);

module.exports = routes