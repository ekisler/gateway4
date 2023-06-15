const jwt = require("jsonwebtoken");
const generateSecretKey = require("../secretKey");

const secretKey = generateSecretKey();

const generateToken = (user) => {
  const userForToken = {
    id: user._id,
    email: user.email,
  };

  try {
    const token = jwt.sign(userForToken, secretKey, { expiresIn: "1h" });
    return token;
  } catch (err) {
    throw new Error("Error al generar el token JWT");
  }
};

module.exports = { generateToken };
