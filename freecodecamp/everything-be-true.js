function truthCheck(collection, pre) {
  const size = Object.keys(collection).length;
  for (let i = 0; i < size; i++) {
    console.log(collection[i][pre]);
    if (!collection[i][pre]) {
      return false;
    }
  }
  return true;
}

console.log(truthCheck(
  [
    { name: 'Quincy', role: 'Founder', isBot: false },
    { name: 'Naomi', role: '', isBot: false },
    { name: 'Camperbot', role: 'Bot', isBot: true },
  ],
  'isBot'
));
