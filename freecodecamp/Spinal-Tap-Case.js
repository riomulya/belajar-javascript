function spinalCase(str) {
  //cek untuk spasi dan underscore menggunakn regex
  let checkSpaceAndUnderscore = /\s+|_+/g;

  str = str.split(/(?=[A-Z])/).join(' ');

  //ubah underscore menjadi spasi
  str = str.replace(checkSpaceAndUnderscore, ' ');

  //ubah spasi menjadi strip dan ubah menjadi huruf
  return str.replace(checkSpaceAndUnderscore, '-').toLowerCase();
}

console.log(spinalCase('Teletubbies say Eh-oh'));
console.log(spinalCase('The_Andy_Griffith_Show'));
console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase('thisIsSpinalTap'));
console.log(spinalCase('AllThe-small Things'));
