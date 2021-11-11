function hapus() {
    var buah = ['pisang', 'jeruk', 'apel', 'mangga']
    console.log(buah)
    buah.pop();
    console.log(buah)
    buah.shift();
    return buah
}

console.log(hapus())