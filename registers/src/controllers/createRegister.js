const express = require("express");
const cookieParser = require("cookie-parser");
const { catchedAsync } = require("../utils");
const authenticate = require("./auth");

const server = express();

server.use(cookieParser());

server.post("/registers", catchedAsync(authenticate));

module.exports = server;
