const fs = require("fs");

const text = fs.readFileSync("note.txt", "UTF-8");

console.log(text);
