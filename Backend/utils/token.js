const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

const sendTokenWithCookie = async (userid, res, message) => {
  const token = jwt.sign({ id: userid }, "dast", {
    expiresIn: "20d",
  });
  res.status(200).json({
    success: true,
    message: message,
    token,
  });
};

module.exports = sendTokenWithCookie;
