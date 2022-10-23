function palindrome(str) {
  const regex = /[^a-zA-Z0-9]/g;
  let temp = [];
  // console.log(Math.floor(str.length / 2));
  for (let i = str.length - 1; i >= 0; i--) {
    temp.push(str[i]);
  }
  temp = temp.join('').toLowerCase().replace(regex, '');
  str = str.toLowerCase().replace(regex, '');
  console.log(temp.replace(regex, ''));
  console.log(str.replace(regex, ''));
  if (temp === str) {
    return true;
  }
  return false;
}

console.log(palindrome('eye'));
console.log(palindrome('_eye'));
console.log(palindrome('My age is 0, 0 si ega ym.'));
