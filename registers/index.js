const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");
const crypto = require("crypto");
const User = require("./models.js");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8005;

app.use(express.json());
app.use(cookieParser());

function generateSalt(length = 16) {
  return crypto.randomBytes(length).toString("hex");
}

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Registers connected!"))
  .catch((err) => console.log(err));

app.post("/registers", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    const salt = generateSalt(16); // Genera una clave secreta única
    const hashedPassword = await bcrypt.hash(password, 10)

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
});

app.listen(PORT, () => {
  console.log(`Register service listening on PORT ${PORT}`);
});
