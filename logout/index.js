const server = require("./src/server")
const PORT = process.env.PORT || 8007;


server.listen(PORT, () => {
  console.log(`Logout services listening on PORT ${PORT}`);
});
