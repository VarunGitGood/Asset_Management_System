const brc = require("bcryptjs");

exports.hashPassword = async (password) => {
  const salt = await brc.genSalt(10);
  const hashedPassword = await brc.hash(password, salt);
  return hashedPassword;
};

exports.checkPassword = async (password,hash) => {
  const isMatch = await brc.compare(password, hash);
  return isMatch;
}