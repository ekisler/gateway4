const userController = require("./userController");
const createRegister = require("./createRegister");
const connectDB = require("../db/db");

connectDB();

module.exports = {
  createRegister,
  userController,
};
