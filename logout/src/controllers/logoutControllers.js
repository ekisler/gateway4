const express = require("express");
const sessionConfig = require("./session-config");
const logic = require("./logic");

const app = express();

app.use(sessionConfig());

app.post("/logout", logic);

module.exports = app;
