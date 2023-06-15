const jwt = require("jsonwebtoken");

const generateToken = async (user) => {
  const token = await jwt.sign({ id: user.id }, "secreto", {
    expiresIn: 3600,
  });
  return token;
};

module.exports = generateToken;
