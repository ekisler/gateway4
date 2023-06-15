const server = require("./src/server");

const PORT = process.env.PORT || 8006;

server.listen(PORT, () => {
  console.log(`Login services listening on PORT ${PORT}`);
});
