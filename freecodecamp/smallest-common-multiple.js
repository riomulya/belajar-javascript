function smallestCommons(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  let numDivide = max - min + 1;
  let upper = 1;

  for (let i = min; i <= max; i++) {
    upper *= i;
  }

  for (let multipleMin = max; multipleMin <= upper; multipleMin += max) {
    let counter = 0;
    for (let i = min; i <= max; i++) {
      if (multipleMin % i === 0) {
        counter++;
      }
    }
    if (numDivide === counter) {
      return multipleMin;
    }
  }
}

console.log(smallestCommons([1, 5]));
console.log(smallestCommons([5, 1]));
console.log(smallestCommons([1, 13]));
console.log(smallestCommons([23, 18]));
console.log(smallestCommons([2, 10]));
