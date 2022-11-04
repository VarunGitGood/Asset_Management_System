const sendTokenWithCookie = async (userid, res, message) => {
  res.status(200).json({
    success: true,
    message: message,
    token: userid,
  });
};

module.exports = sendTokenWithCookie;
