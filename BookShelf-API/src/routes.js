const {
  addBooksHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  editBookByIdHandler,
  deleteBookByIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBooksHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/book/{id}',
    handler: getBookByIdHandler,
  },
  {
    method: 'PUT',
    path: '/book/{id}',
    handler: editBookByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/book/{id}',
    handler: deleteBookByIdHandler,
  },
];

module.exports = routes;
