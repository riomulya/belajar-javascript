function deretAngka(n) {
    for (var s = 1; s <= n; s++) {
        if (s % 3 === 0 && s % 15 != 0) {
            console.log("NIO")
        } else if (s % 5 === 0 && s % 15 != 0) {
            console.log("MIC")
        } else if (s % 3 === 0 && s % 5 === 0) {
            console.log("NIOMIC")
        } else {
            console.log(s)
        }
    }
}
deretAngka(10)
deretAngka(20)
deretAngka(30)