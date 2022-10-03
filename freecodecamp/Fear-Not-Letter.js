function fearNotLetter(str) {
  for (let i = 0; i < str.length; i++) {
    let charTemp = str.charCodeAt(i);
    let seqChar = str.charCodeAt(0) + i;

    if (charTemp !== seqChar) {
      return String.fromCharCode(charTemp - 1);
    }
  }
  return undefined;
}

console.log(fearNotLetter('abce'));
