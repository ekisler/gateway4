const express = require("express");
const logoutContrrollers = require("../controllers");

const router = express.Router();

router.post("/logout", logoutContrrollers);

module.exports = router;
