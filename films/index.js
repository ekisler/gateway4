const server = require("./src/server.js");

const PORT = 8002;

server.listen(PORT, () => {
  console.log(`Films service listening on PORT ${PORT}`);
});
