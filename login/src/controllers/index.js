const connectDB = require("../db/db");
const loginControllers = require("./loginControllers");

connectDB();

module.exports = loginControllers;
