//bukan best practice nya

function translatePigLatin(str) {
  //cek huruf vokal
  let checkVowel = /([aeiou])/i;
  //validasi apakah ada huruf vokal
  let vowelValidation = str.match(checkVowel);
  let stringSplit = str.split('');

  //cek kondisi vokal tidak berada di depan
  if (vowelValidation && vowelValidation.index > 0) {
    let tempString = '';
    for (let i = 0; i < vowelValidation.index; i++) {
      tempString += stringSplit[i];
    }
    str = stringSplit
      .splice(vowelValidation.index, stringSplit.length)
      .join('');
    str += tempString + 'ay';
    return str;
  }

  //cek kondisi vokal berada di depan
  if (vowelValidation && vowelValidation.index >= 0) {
    str += 'way';
  }

  //cek kondisi tidak ada huruf vokal
  if (!vowelValidation) {
    str += 'ay';
  }
  return str;
}

console.log(translatePigLatin('rythm'));
console.log(translatePigLatin('algorithm'));
console.log(translatePigLatin('consonant'));
console.log(translatePigLatin('eigth'));
