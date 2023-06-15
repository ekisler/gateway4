const express = require("express")
const { registerValidations } = require("../middlewares")
const loginControllers  = require("../controllers")

const router = express.Router()

router.post("/login", registerValidations, loginControllers)

module.exports = router;
