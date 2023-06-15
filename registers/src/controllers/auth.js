const bcrypt = require("bcryptjs");
const generateToken = require("../jwt/jwt");
const User = require("../models/userModel");
const generateSalt = require("../secureKey");

generateSalt();

const authenticate = async (req, res) => {
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

    const token = await generateToken(user);
    res.cookie("token", token, { httpOnly: true });

    res.json({ msg: `Usuario ${user.name} registrado exitosamente` });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Error al crear el usuario");
  }
};

module.exports = authenticate;
