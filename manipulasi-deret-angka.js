function deret() {
    for (var n = 1; n <= 50; n++) {
        if (n % 3 === 0 && n % 15 != 0) {
            console.log("NIO", n)
        }
        if (n % 5 === 0 && n % 15 != 0) {
            console.log("MIC", n)
        }
        if (n % 3 === 0 && n % 5 === 0) {
            console.log("NIOMIC", n)
        }
    }
}
deret()