const jwt = require("jsonwebtoken");

exports.sendToken = async (userid) => {
  const token = await jwt.sign({ id: userid }, process.env.JWT_KEY, {
    expiresIn: process.env.JWT_EXPIRES,
  });
  return token;
};

exports.verifyToken = async (token) => {
  const decoded = await jwt.verify(token, process.env.JWT_KEY)
  return decoded.payload
}
