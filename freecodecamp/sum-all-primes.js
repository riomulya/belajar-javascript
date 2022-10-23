function sumPrimes(num) {
  let temp = [];
  let counterPrime = 0;
  for (let i = 2; i <= num; i++) {
    for (let j = 2; j <= i / 2; j++) {
      if (i % j === 0) {
        counterPrime++;
      }
    }

    if (counterPrime === 0) {
      temp.push(i);
    }
    counterPrime = 0;
  }
  let result = temp.reduce((acc, curr) => {
    return acc + curr;
  });

  return result;
}

console.log(sumPrimes(10));
console.log(sumPrimes(977));
