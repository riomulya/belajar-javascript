function chekLirik() {
  let str = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    str = str + '.' + arguments[i];
  }
  str = str.replaceAll(' ', '');
  console.log(str);
}

chekLirik('lai lai lai lai lai', 'lai lai lai lai');
