function myReplace(str, before, after) {
  var index = str.indexOf(before);

  if (str[index] === str[index].toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  } else {
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }
  str = str.replace(before, after);

  return str;
}

console.log(
  myReplace('A quick brown fox jumped over the lazy dog', 'Jumped', 'leaped')
);
// myReplace('A quick brown fox jumped over the lazy dog', 'jumped', 'leaped');
