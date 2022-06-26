// let count = 0;

// function cc(card) {
//   // Only change code below this line
//   //   if (card === 2 || card === 3 || card === 4 || card === 5 || card === 6) {
//   //     count += 1;
//   //   } else if (card === 7 || card === 8 || card === 9) {
//   //     count += 0;
//   //   } else if (
//   //     card === 10 ||
//   //     card === "J" ||
//   //     card === "Q" ||
//   //     card === "K" ||
//   //     card === "A"
//   //   ) {
//   //     count -= 1;
//   //   }
//   switch (card) {
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//       count++;
//       break;
//     case 10:
//     case "J":
//     case "Q":
//     case "K":
//     case "A":
//       count--;
//       break;
//   }
//   //   if (count <= 0) {
//   //     return count + " hold";
//   //   } else if (count > 0) {
//   //     return count + " bet";
//   //   }

//   //   return count;
//   var holdbet = "Hold";
//   if (count > 0) {
//     holdbet = "Bet";
//   }

//   return count + " " + holdbet;
//   // Only change code above this line
// }
// cc(2);
// cc(3);
// cc(7);
// cc("K");
// cc("A");

// const myPlants = [
//   {
//     type: "flowers",
//     list: ["rose", "tulip", "dandelion"],
//   },
//   {
//     type: "trees",
//     list: ["fir", "pine", "birch"],
//   },
// ];

// const secondTree = "";

// Setup
// const myArr = [2, 3, 4, 5, 6];

// // Only change code below this line
// let total = 0;
// for (let i = 0; i < myArr.length; i++) {
//   total = myArr.reduce((acc, curr) => acc + curr);
//   console.log(total);
// }

// function multiplyAll(arr) {
//   let product = 1;
//   // Only change code below this line
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       product *= arr[i][j];
//       console.log(product);
//     }
//   }
//   // Only change code above this line
//   return product;
// }
// // console.log(multiplyAll);

// console.log(
//   multiplyAll([
//     [1, 2],
//     [3, 4],
//     [5, 6, 7],
//   ])
// );

// let factor = 1;
// function factorial(num) {
//   for (let i = num; i > 0; i--) {
//     factor *= i;
//   }
//   return factor;
// }

// console.log(factorial(10));

// function sum(arr, n) {
//   // Only change code below this line
//   if (n <= 0) {
//     return 0;
//   }
//   // else if (n >= 1) {
//   //   return arr[n - 1] * n;
//   // }
//   else {
//     return arr[n - 1] * n - 1;
//   }
//   // Only change code above this line
// }

// console.log(sum([1], 0));
// console.log(sum([2, 3, 4], 1));
// console.log(sum([2, 3, 4, 5], 3));

// Setup
// const contacts = [
//   {
//     firstName: "Akira",
//     lastName: "Laine",
//     number: "0543236543",
//     likes: ["Pizza", "Coding", "Brownie Points"],
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//   },
//   {
//     firstName: "Sherlock",
//     lastName: "Holmes",
//     number: "0487345643",
//     likes: ["Intriguing Cases", "Violin"],
//   },
//   {
//     firstName: "Kristian",
//     lastName: "Vos",
//     number: "unknown",
//     likes: ["JavaScript", "Gaming", "Foxes"],
//   },
// ];

// function lookUpProfile(name, prop) {
//   // Only change code below this line
//   for (let i = 0; i < contacts.length; i++) {
//     if (contacts[i].firstName === name) {
//       if (contacts[i].hasOwnProperty(prop)) {
//         return contacts[i][prop];
//       } else {
//         return "No such property";
//       }
//     }
//   }
//   return "No such contact";
//   // Only change code above this line
// }

// // console.log(contacts.firstName);
// console.log("1. " + lookUpProfile("Akira", "likes"));
// console.log("2. " + lookUpProfile("Kristian", "lastName"));
// console.log("3. " + lookUpProfile("Sherlock", "likes"));
// console.log("4. " + lookUpProfile("Harry", "likes"));
// console.log("5. " + lookUpProfile("Bob", "number"));
// console.log("6. " + lookUpProfile("Bob", "potato"));
// console.log("7. " + lookUpProfile("Akira", "address"));

// function countup(n) {
//   if (n < 1) {
//     return [];
//   } else {
//     const countArray = countup(n - 1);
//     countArray.push(n);
//     return countArray;
//   }
// }
// console.log(countup(2));

// function rangeOfNumbers(startNum, endNum) {
//   if (startNum < endNum) {
//     return [endNum].concat(rangeOfNumbers(startNum, endNum - 1)).sort();
//   } else if (startNum === endNum) {
//     return [endNum];
//   } else {
//     return [endNum];
//   }
// }

// console.log(rangeOfNumbers(1, 5));
// console.log(rangeOfNumbers(6, 9));

// const stats = {
//   max: 56.78,
//   standard_deviation: 4.34,
//   median: 34.54,
//   mode: 23.87,
//   min: -0.75,
//   average: 35.85,
// };

// // Only change code below this line
// const { max, min } = stats;
// const half = () => (max + min) / 2.0;
// // Only change code above this line
// console.log(half());

// const result = {
//   success: ["max-length", "no-amd", "prefer-arrow-functions"],
//   failure: ["no-var", "var-on-top", "linebreak"],
//   skipped: ["no-extra-semi", "no-dup-keys"],
// };
// function makeList(arr) {
//   // Only change code below this line
//   const failureItems = [];
//   for (i = 0; i < arr.length; i++) {
//     failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
//   }
//   // Only change code above this line

//   return failureItems;
// }

// const failuresList = makeList(result.failure);

// console.log(failuresList);

// const bicycle = {
//   gear: 2,
//   setGear: (newGear) => {
//     bicycle.gear = newGear;
//   },
// };
// // Only change code above this line
// bicycle.setGear(48);
// console.log(bicycle.gear);

// Only change code below this line
// class Thermostat {
//   constructor(temperature) {
//     temperature = (5 / 9) * (temperature - 32);
//     this.temperature = temperature;
//   }
//   //getter
//   get getter() {
//     return this.temperature;
//   }
//   set setter(updateTemperature) {
//     this.temperature = updateTemperature;
//   }
// }
// // Only change code above this line

// const thermos = new Thermostat(76); // Setting in Fahrenheit scale
// console.log(thermos.temperature);
// let temp = thermos.temperature; // 24.44 in Celsius
// thermos.temperature = 26;
// console.log(thermos.temperature);
// temp = thermos.temperature; // 26 in Celsius
// const makeServerRequest = new Promise((resolve, reject) => {
//   // responseFromServer is set to false to represent an unsuccessful response from a server
//   let responseFromServer = true;

//   if (responseFromServer) {
//     resolve("We got the data");
//   } else {
//     reject("Data not received");
//   }
// });

// makeServerRequest.then((result) => {
//   console.log(result);
// });
// makeServerRequest.catch((error) => {
//   console.error(error);
// });

// Only change code below this line
// let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
// let chewieRegex = /Aa*/; // Change this line
// // Only change code above this line

// let result = chewieQuote.match(chewieRegex);

// let text = "<h1>Winter is coming titanic aaaaa</h1>";
// let myRegex = /a+/g; // Change this line
// let result = text.match(myRegex);

// let quoteSample = "The 1@#$ five boxing wizards jump quickly !11@#$$%^.";
// let alphabetRegexV2 = /\w*/g; // Change this line
// let result = quoteSample.match(alphabetRegexV2);

// let username = "JackOfAllTrades";
// let userCheck = /^[\w][\w]+\d*$/g; // Change this line
// let result = username.match(userCheck);

// let sample = "Whitespace is important in separating words";
// let countNonWhiteSpace = /\s/g; // Change this line
// let result = sample.match(countNonWhiteSpace);

// let A4 = "aaaah";
// let A2 = "aah";
// let multipleA = /a{3,5}h/;
// console.log(multipleA.test(A4));
// console.log(multipleA.test(A2));
// console.log(A4.match(multipleA));
// console.log(A2.match(multipleA));

// let A4 = "haaaah";
// let A2 = "haah";
// let A100 = "h" + "a".repeat(100) + "h";
// let multipleA = /ha{3,}h/;
// console.log(multipleA.test(A4));
// console.log(multipleA.test(A2));
// console.log(multipleA.test(A100));

// let password = "banan1";
// let checkPass = /(?=\w{3,6})|(?=\D*\d)/;
// console.log(checkPass.test(password));

// console.log(result);

// let firstString = "Ricky is first and can be found.";
// let firstRegex = /[^Ricky]/gi;
// console.log(firstRegex.test(firstString));
// let notFirst = "You can't find Ricky now.";
// console.log(firstRegex.test(notFirst));

// let output =
//   "Get this to show once in the freeCodeCamp console and not at all in the browser console";
// console.log(output);
// console.clear(output);
// // console.clear()

// let seven = 7;
// let three = "3";
// console.log(seven + three);
// // Only change code below this line
// console.log(typeof seven);
// console.log(typeof three);

// let receivables = 10;
// let payables = 8;
// let netWorkingCapital = receivables - payables;
// console.log(`Net working capital is: ${netWorkingCapital}`);

// function countToFive() {
//   let firstFive = "12345";
//   // Only change code below this line
//   for (let i = 0; i < firstFive.length; i++) {
//     // Only change code above this line
//     console.log(firstFive[i]);
//   }
// }

// console.log(countToFive());

// let alphabet = "abcdefghijklmnopqrstuvwxyz";
// let len = alphabet.length;
// for (let i = 0; i <= len; i++) {
//   console.log(alphabet[i]);
// }
// for (let j = 1; j < len; j++) {
//   console.log(alphabet[j]);
// }
// for (let k = 0; k < len; k++) {
//   console.log(alphabet[k]);
// }

// function zeroArray(m, n) {
//   let newArray = [];
//   for (let i = 0; i < m; i++) {
//     let row = []; /* <-----  row has been declared inside the outer loop.
//        Now a new row will be initialised during each iteration of the outer loop allowing
//        for the desired matrix. */
//     for (let j = 0; j < n; j++) {
//       row.push(0);
//     }
//     newArray.push(row);
//   }
//   return newArray;
// }
// let matrix = zeroArray(3, 2);
// console.log(matrix);

// function copyMachine(arr, num) {
//   let newArr = [];
//   while (num >= 1) {
//     // Only change code below this line
//     console.log(arr);
//     newArr.push(arr);
//     // newArr = arr;
//     // Only change code above this line
//     num--;
//   }
//   return newArr;
// }

// console.log(copyMachine([true, false, true], 2));

// function quickCheck(arr, elem) {
//   // Only change code below this line
//   if (arr.indexOf(elem) => 0) {
//     return true;
//   } else {
//     return false;
//   }
//   // Only change code above this line
// }

// console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));
// console.log(quickCheck(["onions", "squash", "shallots"], "onions"));

// let data = ["onions", "squash", "shallots"];

// console.log(data.indexOf("onions"));

function filteredArray(arr, elem) {
  let newArr = [];
  // change code below this line

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) == -1) {
      //Checks every parameter for the element and if is NOT there continues the code
      newArr.push(arr[i]); //Inserts the element of the array in the new filtered array
    }
  }

  // change code above this line
  return newArr;
}

console.log(
  filteredArray(
    [
      [3, 2, 3],
      [1, 6, 3],
      [3, 13, 26],
      [19, 3, 9],
    ],
    3
  )
);

let a = 0;
let b = 1;

const result = a === b ? true : false;

console.log(result);
