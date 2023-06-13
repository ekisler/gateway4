const { catchedAsync } = require("../utils");
const userController = require("./userController");
const createRegister = require("./createRegister");

const userControllerWrapper = catchedAsync(userController, createRegister);

module.exports = {
  userController,
  createRegister,
  userControllerWrapper,
};
