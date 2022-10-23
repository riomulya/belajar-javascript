function sumFibs(num) {
  let temp = [];
  let result = 0;

  for (let i = 0; i < num; i++) {
    if (i == 0 || i == 1) {
      temp.push(1);
    } else {
      temp[i] = temp[i - 1] + temp[i - 2];
    }
    if (temp[i] % 2 == 1 && temp[i] <= num) {
      result += temp[i];
    }
  }


  return result;
}

console.log(sumFibs(10));
