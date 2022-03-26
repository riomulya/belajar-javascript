//import express routes
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    Nama: "Richard Muhammad.",
    TanggalLahir: " 14 Januari 1994.",
    JenisKelamin: "Laki - Laki.",
    Hobi: "Membaca Buku.",
  });
});
router.put("/", (req, res) => {
  res.send("Hello, Selamat Anda telah berhasil mengupdate");
});
router.delete("/", (req, res) => {
  res.send("Hello, Selamat Anda telah berhasil menghapuskan");
});
router.post("/", (req, res) => {
  res.send("Hello, Selamat Anda telah berhasil menuliskan atau create");
});

module.exports = router;
