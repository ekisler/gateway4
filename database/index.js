const server = require("./src/server");

server.listen(8004, () => {
  console.log("Database service listening on PORT 8004");
});
