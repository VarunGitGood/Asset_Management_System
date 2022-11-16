const jwt = require("jsonwebtoken");
const ErrorResponse = require("../utils/errorResponse");
const connection = require("../connection");

exports.protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  // Make sure token exists
  if (!token) {
    return next(new ErrorResponse("Not authorized to access this route", 401));
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, "lmaodasd");
    // set user in header
    let query = `SELECT * FROM master_staff WHERE staff_id = ?`;
    req.user = connection.query(
        query,
        [decoded.id],
        (err, result) => {
            if (err) throw err;
            return result[0];
        }
    );
    next();
  } catch (err) {
    return next(new ErrorResponse("Not Authorized", 401));
  }
};
