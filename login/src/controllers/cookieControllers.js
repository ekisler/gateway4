const setCookie = (req, res, next) => {
  res.cookie("token", res.token, { httpOnly: true, secure: true });
  next();
};

module.exports = { setCookie };
