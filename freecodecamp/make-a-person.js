// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)

const Person = function (firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  this.getFullName = () => {
    return firstAndLast;
  };
  this.getFirstName = () => {
    temp = firstAndLast;
    return (temp = firstAndLast.split(' ')[0]);
  };
  this.getLastName = () => {
    temp = firstAndLast;
    return (temp = firstAndLast.split(' ')[1]);
  };
  this.setFirstName = (first) => {
    return (firstAndLast = firstAndLast.replace(
      firstAndLast.split(' ')[0],
      first
    ));
  };
  this.setLastName = (last) => {
    return (firstAndLast = firstAndLast.replace(
      firstAndLast.split(' ')[1],
      last
    ));
  };
  this.setFullName = (firstlast) => {
    return (firstAndLast = firstAndLast.replace(firstAndLast, firstlast));
  };

  return firstAndLast;
};


const bob = new Person('Bob Ross');
console.log(bob.getFullName());
console.log(bob.getLastName());
console.log(bob.getFullName());
console.log(bob.getFirstName());
console.log(bob.getFullName());
console.log(bob.getLastName());

console.log(bob.setFirstName('Haskell'));
console.log(bob.getFullName());
console.log(bob.setFullName('Haskell Curry'));
console.log(bob.getFullName());
console.log(bob.getLastName());

console.log(Object.keys(bob).length)
