const { catchedAsync } = require("../utils");
const userController = require("./userController")
const createRegister = require("./createRegister")

module.exports = {
  userController,
  createRegister,
}
