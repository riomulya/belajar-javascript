const Hapi = require("@hapi/hapi");
const { Routes } = require("./routes");
const server = Hapi.server({
  port: 5000,
  host: "localhost",
});

const init = async () => {
  server.route(Routes);
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
