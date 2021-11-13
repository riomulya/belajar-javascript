// Periksalah apakah Infinity atau Not Infinity dari deret bilangan 
// 2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16

function div(x) {
    if (isFinite(1000 / x)) {
        return 'NOT Infinity.';
    }
    return 'Infinity!';
}

console.log("angka 2", div(2));
console.log("angka 39", div(39));
console.log("angka 76", div(76));
console.log("angka 50", div(60));
console.log("angka 9", div(9));
console.log("angka 7", div(7));
console.log("angka 41", div(41));
console.log("angka 2", div(2));
console.log("angka 24", div(24));
console.log("angka 1", div(1));
console.log("angka 16", div(16));