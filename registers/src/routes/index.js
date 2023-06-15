const express = require("express");
const { registerValidations } = require("../middlewares/registerValidations");
const { createRegister, userController } = require("../controllers");
const router = express.Router();

router.get("/registers", userController);

router.post("/registers", registerValidations, createRegister);

module.exports = router;
