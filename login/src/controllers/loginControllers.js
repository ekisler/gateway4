const express = require("express");
const sessionConfig = require("./sessionConfig");
const { catchedAsync } = require("../utils");
const { authenticate } = require("./auth")
const cookieControllers = require("./cookieControllers")

const server = express();

server.use(sessionConfig())

server.use(cookieControllers.setCookie)

server.post("/login", catchedAsync(authenticate))


module.exports = server;
