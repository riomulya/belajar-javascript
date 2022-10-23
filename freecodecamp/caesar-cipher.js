// function rot13(str) {
//   var value = 10;
//   var char = 'j';
//   console.log(char)
//     let string = (value).toString(36).toUpperCase()
//   console.log(string);
// //   return str;
// }

// function rot13(message) {
//   return message.replace(/[a-z]/gi, (letter) =>
//     String.fromCharCode(
//       letter.charCodeAt(0) + (letter.toLowerCase() <= 'm' ? 13 : -13)
//     )
//   );
// }

// function rot13(message) {
//   return message.replace(/[a-z]/gi, (Letter) =>
//     String.fromCharCode(
//       Letter.charCodeAt(0) + (Letter.toLowerCase() <= 'm' ? 13 : -13)
//     )
//   );
// }

// function rot13(msg) {
//   console.log(String.fromCharCode(...msg));
// }

function rot13(message) {
    const alpha = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM';
    return message.replace(/[a-zA-Z]/gi,shift =>alpha[alpha.indexOf(shift)+13])
}

console.log(rot13('SERR PBQR PNZC!'));
