const { hashPassword, checkPassword } = require("../utils/password");
const connection = require("../config/connection");
const ErrorResponse = require("../utils/errorResponse");
const { sendToken, verifyToken } = require("../utils/token");

// @POST
// request will create user in master_login and send jsonwebtoken
exports.signIn = async (req, res, next) => {
  try {
    let { email, password, phone } = req.body;
    password = await hashPassword(password);
    let query =
      "INSERT INTO master_login (password, email, phone) VALUES (?,?,?)";
    connection.query(query, [password, email, phone], async (err, result) => {
      if (err) {
        return next(new ErrorResponse(err.message, err.errno));
      }
      console.log(result);
      res.status(200).json({
        success: true,
        message: "User created!",
      });
    });
  } catch (error) {
    next(new ErrorResponse(error.message, 400));
  }
};

// @POST
// request will verify hashed password and send token
exports.login = async (req, res, next) => {
  try {
    let { email, password } = req.body;
    let query = "SELECT * FROM master_login WHERE email = ?;";
    connection.query(query, [email], async (err, results) => {
      if (err) {
        next(new ErrorResponse(err.message, err.errno));
      }
      let hash = results[0].password;
      let id = results[0].userid;
      let isMatch = await checkPassword(password, hash);
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
    next(new ErrorResponse(error.message, 404));
  }
};

// @GET
// grabs the current user details
exports.getUser = async (req, res, next) => {
  try {
    let { token } = req.body;
    const decoded = await verifyToken(token);
    console.log(decoded);
  } catch (error) {
    console.log(error.message);
  }
};
