function pairElement(str) {
  function pushDna(char, arrayDna) {
    switch (char) {
      case 'A':
        arrayDna.push(['A', 'T']);
        break;
      case 'T':
        arrayDna.push(['T', 'A']);
        break;
      case 'G':
        arrayDna.push(['G', 'C']);
        break;
      case 'C':
        arrayDna.push(['C', 'G']);
        break;
    }
  }

  let arrDna = [];

  for (let i = 0; i < str.length; i++) {
    pushDna(str[i], arrDna);
  }
  return arrDna;
}

console.log(pairElement('GCG'));
