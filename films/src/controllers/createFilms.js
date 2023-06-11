const Film = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const newFilm = await Film.create();
  response(res, 200, newFilm);
};
