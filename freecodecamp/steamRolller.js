function steamrollArray(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result.push(...steamrollArray(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
