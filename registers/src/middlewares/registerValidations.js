const { ClientError } = require("../utils/errors");

const registerValidations = async (req, res, next) => {
  const { name, email, password } = req.body;
  if (name.length < 3 || name.length > 20 || !/^[a-zA-Z]+$/.test(name)) {
    const error = new ClientError(
      "Nombre obligatorio, Min-3 caracteres Max- 20, solo letras",
      401
    );
    return next(error);
  }
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    const error = new ClientError("Email obligatorio, utilice formato valido por favor", 401);
    return next(error);
  }
  if (password.length < 6 || password.length > 16) {
    const error = new ClientError(
      "Password obligatorio, Min- 6 caracteres Max- 16",
      401
    );
    return next(error);
  }
  return next();
};

module.exports = { registerValidations };
