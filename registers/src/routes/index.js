const express = require("express");
const createRegister = require("../controllers/createRegister");
const { userController } = require("../controllers/userController")
const router = express.Router();

router.get("/registers", userController)

router.post("/registers", createRegister);

module.exports = router;
