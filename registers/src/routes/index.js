const express = require("express");
const { registerValidations } = require("../middlewares/registerValidations");
const createRegister = require("../controllers/createRegister");
const { userController } = require("../controllers/userController");
const router = express.Router();

router.get("/registers", userController);

router.post("/registers", registerValidations, createRegister);

module.exports = router;
