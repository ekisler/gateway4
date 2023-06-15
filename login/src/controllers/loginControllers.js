const express = require("express");
const session = require("express-session");
const { catchedAsync } = require("../utils");
const { authenticate } = require("./auth")
const secretKey = require("../secretKey")

const server = express();

server.use(
  session({
    secret: secretKey(),
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 24 * 60 * 60 * 1000 },
  })
);

server.use((req, res, next) => {
  res.cookie("token", req.token, { httpOnly: true, secure: true });
  next();
});

server.post("/login", catchedAsync(authenticate))


module.exports = server;
