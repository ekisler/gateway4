const mongoose = require("mongoose");
const { MONGO_URI } = require("../config/envs.js");

const conn = mongoose.createConnection(MONGO_URI);

module.exports = {
  Character: conn.model("Character", require("./schemas/characterSchema.js")),
  Film: conn.model("Film", require("./schemas/filmSchema.js")),
  Planet: conn.model("Planet", require("./schemas/planetSchema.js")),
};
