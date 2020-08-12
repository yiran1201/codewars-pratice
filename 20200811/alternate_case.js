// Write function alternateCase which switch every letter in string
// from upper to lower and from lower to upperE.g: Hello World -> hELLO wORLD




function alternateCase(s) {
  let arr = s.split('');
  let res = [];
  for (let item of arr) {
    if (item === item.toUpperCase()) {
      res.push(item.toLowerCase());
    } else {
      res.push(item.toUpperCase());
    }
  }

  return res.join('');
}
