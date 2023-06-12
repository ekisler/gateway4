const express = require("express");
const session = require("express-session");
const crypto = require("crypto");

const app = express();
const PORT = process.env.PORT || 8007;

function generateSecretKey() {
  return crypto.randomBytes(32).toString('hex')
}

const secretKey = generateSecretKey()

app.use(
  session({
    secret: secretKey,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 24 * 60 * 60 * 1000 },
  })
);

app.post("/logout", (req, res) => {
  // Verifica si hay una sesión activa (es decir, si hay un objeto de sesión en req.session)
  if (req.session) {
    // Intenta destruir la sesión con el método destroy()
    req.session.destroy((err) => {
      // Si hay un error al destruir la sesión, envía un mensaje de error y un código de estado 500
      if (err) {
        console.error(err);
        res.status(500).send("Error del Servidor");
      } else {
        // Si la destrucción de la sesión es exitosa, envía un mensaje de éxito y un código de estado 200
        res.send("Cierre de sesión exitoso");
      }
    });
  } else {
    // Si no hay sesión activa, envía un mensaje indicando que no hay sesión para cerrar
    res.send("No hay sesión para cerrar");
  }
});

app.listen(PORT, () => {
  console.log(`Logout services listening on PORT ${PORT}`);
});
