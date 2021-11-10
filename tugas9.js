function mahasiswa() {
    var data = {
        nama: "RIO MULYA SYAWAL",
        umur: 18,
        semester: 1,
    }
    for (var x in data) {
        console.log(data[x])
    }
}

mahasiswa()