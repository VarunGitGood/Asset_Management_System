const connection = require("../config/connection");
const ErrorResponse = require("../utils/errorResponse");

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

// get staff by id
exports.getStaffById = async (req, res, next) => {
    try {
        const {id} = req.body;
        let query = "SELECT * FROM master_staff WHERE staff_id = ?";
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