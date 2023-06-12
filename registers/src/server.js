const express = require("express");
const morgan = require("morgan");
const userController = require("./routes");
const createRegister = require("./routes");
const server = express();

server.use(morgan("dev"));
server.use(express.json());

server.get("/registers", userController);
server.post("/registers", createRegister);

server.use("*", (req, res) => {
  res.status(404).send("Not found");
});

server.use((err, req, res, next) => {
  res.status(err.statsCode || 500).send({
    error: true,
    message: err.message,
  });
});
module.exports = server;
