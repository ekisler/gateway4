const axios = require("axios");
const planets = require("./planets.json");

module.exports = {
  list: async () => {
    const results = await axios.get("http://database:8004/Planet");
    return planets;
  },

  create: async () => {
    throw Error("Hay un error al momento de crear el planeta");
  },
};
