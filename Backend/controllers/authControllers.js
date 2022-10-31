const { hashPassword, checkPassword } = require("../utils/password");
const connection = require("../config/connection");
const ErrorResponse = require("../utils/errorResponse");
const { sendToken } = require("../utils/token");

// @POST
// request will create user in master_login and send jsonwebtoken
exports.signIn = async (req, res, next) => {
  try {
    let { name, email, password, phone } = req.body;
    password = await hashPassword(password);
    let query =
      "INSERT INTO master_staff (staff_name, staff_email, staff_password, staff_phone) VALUES (?,?,?,?)";
    connection.query(query, [name,email,password, phone], async (err, result) => {
      if (err) {
        return next(new ErrorResponse(err.message));
      }
      console.log(result);
      res.status(200).json({
        success: true,
        message: "User created!",
      });
    });
  } catch (error) {
    next(new ErrorResponse(error.message));
  }
};

// @POST
// request will verify hashed password and send token
exports.login = async (req, res, next) => {
  try {
    let { email, password } = req.body;
    console.log(email,password);
    let query = "SELECT * FROM master_staff WHERE staff_email = ?";
    connection.query(query, [email], async (err, results) => {
      if (err) {
        return next(new ErrorResponse(err.message));
      }
      let hash = results[0].staff_password;
      let id = results[0].staff_id;
      let isMatch = await checkPassword(password,hash);
      if (isMatch) {
        const token = await sendToken(id);
        res.status(200).json({
          success: true,
          message: "Logged In!",
          token,
        });
      } else {
        next(new ErrorResponse("Invalid Credentials", 401));
      }
    });
  } catch (error) {
    next(new ErrorResponse(error.message,400));
  }
};

