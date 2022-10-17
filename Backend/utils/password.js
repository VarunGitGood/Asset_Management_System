const brc = require("bcryptjs");

exports.hashPassword = async (password) => {
  try {
    const salt = await brc.genSalt(10);
    const hashedPassword = await brc.hash(password, salt);
    return hashedPassword;
  } catch (error) {
    console.log(error.message);
  }
};
