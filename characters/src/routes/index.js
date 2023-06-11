const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");

const router = Router();

router.get("/", controllers.getCharacters);

router.post("/", middlewares.characterValidations, controllers.createCharacter);

module.exports = router;
