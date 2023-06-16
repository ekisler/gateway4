const User = require("../models/userModel.js");
const { response } = require("../utils");

async function getRegisters(req, res) {
  try {
    const users = await User.find();
    response(res, 200, users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Error al obtener los usuarios registrados");
  }
}

module.exports = {
  getRegisters,
};
