function logicControllers(req, res) {
  if (req.session) {
    req.session.destroy((err) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error del Servidor");
      } else {
        res.send("Cierre de sesión exitoso");
      }
    });
  } else {
    res.send("No hay sesión para cerrar");
  }
}

module.exports = logicControllers;
