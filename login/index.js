require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const session = require("express-session");
const crypto = require("crypto");
const User = require("./models.js");

const app = express();
const PORT = process.env.PORT || 8006;
const mongoUri = process.env.MONGO_URI;

function generateSecretKey() {
  return crypto.randomBytes(32).toString('hex')
}

const secretKey = generateSecretKey()

async function connectToDatabase() {
  try {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conectado a la base de datos");
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
  }
}

connectToDatabase();

app.use(bodyParser.json());

app.use(
  session({
    secret: secretKey,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 24 * 60 * 60 * 1000 },
  })
);

app.use((req, res, next) => {
  res.cookie("token", req.token, { httpOnly: true, secure: true });
  next();
});

app.post("/login", async (req, res) => {
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

  const userForToken = {
    id: user._id,
    email: user.email,
  };

  jwt.sign(userForToken, secretKey, { expiresIn: "1h" }, (err, token) => {
    if (err) {
      return res
        .status(500)
        .json({ error: "Error al iniciar sesion sesión:", err });
    }

    req.session.token = token;
    res
      .status(200)
      .json({ message: "Token JWT generado y almacenado en la sesion" });
  });
});

app.listen(PORT, () => {
  console.log(`Login services listening on PORT ${PORT}`);
});
