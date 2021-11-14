function bilKelipatan() {
    var data = []
    for (var i = 0; i <= 10; i++) {
        for (var n = 0; n <= 10; n++) {
            if (i = n + i) {
                data.push(i)
            }
        }
    }
    return data
}

console.log(bilKelipatan())