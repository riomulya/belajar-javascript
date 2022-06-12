const { nanoid } = require('nanoid');
const notes = require('./notes');

const addNotesHandler = (request, h) => {
  const { title, tags, body } = request.payload;
  const id = nanoid(16);
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;

  const newNotes = {
    title,
    tags,
    body,
    id,
    createdAt,
    updatedAt,
  };
  notes.push(newNotes);

  const isSuccess = notes.filter((note) => note.id === id).length > 0;

  //jika sukses ditambahkan
  if (isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'catatan berhasil ditambahkan',
      data: {
        noteId: id,
      },
    });
    response.code(201);
    return response;
  }
  // jika gagal ditambahkan
  const response = h.response({
    status: 'fail',
    message: 'note gagal ditambahkan',
  });
  response.code(500);
  return response;
};

const getAllNotesHandler = () => ({
  status: 'success',
  data: {
    notes,
  },
});

const getNoteByIdHandler = (request, h) => {
  const id = request.params;
  const note = notes.filter((n) => n.id === id)[0];
  if (note !== undefined) {
    return {
      status: 'Success',
      data: {
        note,
      },
    };
  }
  const response = h.response({
    status: 'fail',
    message: 'Catatan Tidak ditemukan',
  });
  response.code(404);
  return response;
};

module.exports = { addNotesHandler, getAllNotesHandler, getNoteByIdHandler };
