// Teman teman buatlah sebuah variabel array dengan 2 buah nama buah buahan pisang , jeruk
// Setelah itu teman teman tampilkan nilai awal array tersebut, lakukan perintah unshift dan tambahkan data  apel dan mangga
function tambah2() {
    var buah = ['pisang', 'jeruk']
    console.log(buah)
    buah.unshift('apel', 'mangga')
    return buah
}

console.log(tambah2())