var siswa1 = 140;
var siswa2 = 160;
var siswa3 = 155;

if (siswa1 > siswa2) {
    if (siswa1 > siswa3) {
        console.log("siswa pertama yang tertinggi")
    } else {
        console.log("siswa kedua yang terkecil")
    }
} else if (siswa2 > siswa3) {
    if (siswa2 > siswa1)
        console.log("siswa ke dua yang tertinggi")
} else {
    console.log("siswa ke tiga yang tertinggi")
}