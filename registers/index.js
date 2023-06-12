const server = require("./src/server")

const PORT = process.env.PORT || 8005;

server.listen(PORT, () => {
  console.log(`Register service listening on PORT ${PORT}`);
});
