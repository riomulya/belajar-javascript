//salah

// function uniteUnique(arr) {
//   let args1 = arguments[1];
//   let args2 = arguments[2];
//   console.log(args1);
//   for (let i = 0; i < arr.length; i++) {
//     let tempInt = arr[i];
//     for (let j = 0; j < args1.length; j++) {
//       if (tempInt === args1[j]) {
//         args1.splice(i, 1);
//       }
//       for (let k = 0; j < args2.length; j++) {
//         if (tempInt === args2[k]) {
//           args2.splice(i, 1);
//         }
//       }
//     }
//   }
//   arr = [arr, arguments[1], arguments[2]].flat();
//   return arr;
// }

// work
function uniteUnique(arr) {
  let temp = [];
  for (let i = 0; i < arguments.length; i++) {
    temp.push(...arguments[i]);
  }

  for (let j = 0; j < temp.length; j++) {
    for (let k = 0; k < temp.length; k++) {
      if (temp[j] === temp[k] && j !== k) {
        temp.splice(k, 1);
      }
    }
  }
  return temp;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
