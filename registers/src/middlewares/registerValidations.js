const { ClientError } = require("../utils/errors");

const registerValidations = async (req, res, next) => {
  const { name } = req.body;
  if (name) return next();
  else throw new ClientError("Error en el nombre", 401);
};

module.exports = { registerValidations }
