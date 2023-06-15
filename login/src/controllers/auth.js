const bcrypt = require("bcrypt");
const User = require("../models");
const generateSecretKey = require("../secretKey");
const { generateToken } = require("./token")

const secretKey = generateSecretKey();

const authenticate = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res
      .status(401)
      .json({ message: "Correo electrónico o contraseña incorrectos" });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res
      .status(401)
      .json({ message: "Correo electrónico o contraseña incorrectos" });
  }

  const token = generateToken(user)

    req.session.token = token;
    res
      .status(200)
      .json({ message: "Token JWT generado y almacenado en la sesion" });
  }

module.exports = { authenticate };
