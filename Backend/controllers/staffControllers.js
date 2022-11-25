const connection = require("../connection");
const ErrorResponse = require("../utils/errorResponse");
const jwt = require("jsonwebtoken");

// @GET
// request will get all staff
exports.getAllStaff = async (req, res, next) => {
    try {
        let query = "SELECT * FROM master_staff";
        connection.query(query, (err, results) => {
        if (err) {
            return next(new ErrorResponse(err.message));
        }
        res.status(200).json({
            success: true,
            data: results,
        });
        });
    } catch (error) {
        next(new ErrorResponse(error.message));
    }
}

// @GET
// get staff by id
exports.getStaffById = async (req, res, next) => {
    try {
        const {token} = req.body;
        const decoded = jwt.verify(token, "dast");
        console.log(decoded.id);
        let query = "SELECT * FROM master_staff WHERE staff_id = ?";
        connection.query(query, [decoded.id], (err, results) => {
        if (err) {
            return next(new ErrorResponse(err.message));
        }
        res.status(200).json({
            success: true,
            data: results,
        });
        });
    } catch (error) {
        next(new ErrorResponse(error.message));
    }
}

// @GET
// gets all activity performed by staff with given staff id using join
exports.getStaffActivity = async (req, res, next) => {
    try {
        const id = req.params.id;
        let query = "SELECT * FROM master_staff INNER JOIN activity ON master_staff.staff_id = activity.staff_id WHERE master_staff.staff_id = ?";
        connection.query(query, [id], (err, results) => {
        if (err) {
            return next(new ErrorResponse(err.message));
        }
        res.status(200).json({
            success: true,
            data: results,
        });
        });
    } catch (error) {
        next(new ErrorResponse(error.message));
    }
}

exports.getid = async (req, res, next) => {
    try {
        const {token} = req.body;
        let query = "SELECT * FROM master_staff WHERE staff_id = ?";
        connection.query(query, [token], (err, results) => {
        if (err) {
            return next(new ErrorResponse(err.message));
        }
        res.status(200).json({
            success: true,
            data: results,
        });
        });
    } catch (error) {
        next(new ErrorResponse(error.message));
    }
}



