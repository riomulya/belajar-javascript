const Routes = [
  {
    method: "GET",
    path: "/",
    handler: (request, h) => {
      const { name, location } = request.query;
      return `<h1>Hello, ${name} from ${location}</h1>`;
    },
  },
  {
    method: "*",
    path: "/",
    handler: (request, h) => {
      return `<h1>Halaman Tidak Bisa Di akses Dengan method tersebut</h1>`;
    },
  },
  {
    method: "GET",
    path: "/about",
    handler: (request, h) => {
      return `<h1>Ini Halaman About</h1>`;
    },
  },
  {
    method: "*",
    path: "/about",
    handler: (request, h) => {
      return `<h1>Halaman About Tidak Dapat Di akses</h1>`;
    },
  },
  {
    method: "GET",
    path: `/hello/{username?}`,
    handler: (request, h) => {
      const { username = "Stranger" } = request.params;
      return `<h1>Hello, ${username}!</h1>`;
    },
  },
  {
    method: "*",
    path: `/{any*}`,
    handler: (request, h) => {
      return h.response("`<h1>Halaman Tidak Ditemukan!</h1>`").code(404);
    },
  },
];

module.exports = { Routes };
