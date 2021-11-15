function balikkata(kata) {
    var simpan = "";
    for (var x = kata.length - 1; x >= 0; x--) {
        simpan = simpan + kata[x]
    }
    return simpan
}
//testcase
console.log(balikkata("recursion!"))
console.log(balikkata("JavaScript"))
console.log(balikkata("alohahola"))
console.log(balikkata("Jawa_Barat"))