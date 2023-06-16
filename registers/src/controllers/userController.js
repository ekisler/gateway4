const express = require("express");
const server = express()
const { getRegisters } = require("./logicControllers");


server.get("/registers", getRegisters)

module.exports = server;
