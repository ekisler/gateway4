const session = require("express-session");
const generateSecretKey = require("../secureKey");

const config = () => {
  const secretKey = generateSecretKey();

  return session({
    secret: secretKey,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 24 * 60 * 60 * 1000 },
  });
 
};

 module.exports = config;
