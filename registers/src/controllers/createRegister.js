const express = require("express")
const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");
const connectDB = require("../db/db");
const User = require("../models/userModel");
const generateSalt = require("../secureKey");

const server = express();

server.use(cookieParser());

connectDB();

generateSalt();

const createRegister = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    const salt = generateSalt(16); // Genera una clave secreta única
    const hashedPassword = await bcrypt.hash(password, 10);

    user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();

    res.json({ msg: `Usuario ${user.name} registrado exitosamente` });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Error al crear el usuario");
  }
}

module.exports = createRegister;
