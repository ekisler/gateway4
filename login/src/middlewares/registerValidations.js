const { ClientError } = require("../utils/errors");

const registerValidations = async (req, res, next) => {
  const { email, password } = req.body;
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    const error = new ClientError(
      "Introduzca Email, utilice formato valido por favor",
      401
    );
    return next(error);
  }
  if (password.length < 6 || password.length > 16) {
    const error = new ClientError(
      "Introduzca Password, Min- 6 caracteres Max- 16",
      401
    );
    return next(error);
  }
  return next();
};

module.exports = { registerValidations };
