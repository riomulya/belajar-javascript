// function copyMachine(arr, num) {
//   let newArr = [];
//   while (num >= 1) {
//     // Only change code below this line
//     console.log(arr);
//     arr.push(newArr);
//     // Only change code above this line
//     num--;
//   }
//   return newArr;
// }

// console.log(copyMachine([true, false, true], 2));

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let temp = nums[0];
  let newArr = [];
  for (let i = 1; i <= nums.length; i++) {
    newArr.push(temp);
    temp += nums[i];
  }
  return newArr;
};

console.log(runningSum([1, 2, 3, 4]));

function whatIsInAName(collection, source) {
  const arr = [];
  // Only change code below this line
  const souceKeys = Object.keys(source);

  collection.filter((obj) => {
    for (let i = 0; i < souceKeys.length; i++) {
      console.log(obj[souceKeys[i]]);
      console.log(!obj.hasOwnProperty(souceKeys[i]));
      console.log(source[souceKeys[i]]);
      console.log(source[souceKeys[i]] === obj[souceKeys[i]]);
      if (source[souceKeys[i]] !== obj[souceKeys[i]]) {
        return false;
      }
    }
    arr.push(obj);
  });

  // Only change code above this line
  return arr;
}

console.log(
  whatIsInAName(
    [
      { first: 'Romeo', last: 'Montague' },
      { first: 'Mercutio', last: null },
      { first: 'Tybalt', last: 'Capulet' },
    ],
    { first: 'Tybalt', last: 'Capulet' }
  )
);
console.log(
  whatIsInAName(
    [
      { first: 'Romeo', last: 'Montague' },
      { first: 'Mercutio', last: null },
      { first: 'Tybalt', last: 'Capulet' },
    ],
    { last: 'Capulet' }
  )
);
