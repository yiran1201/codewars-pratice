function sayMeOperations(str) {
  str1 = str.split('');
  let res = [];
  for (let i = 2; i < str1.length; i++) {
    if (str1[i-2] + str1[i -1] === str1[i]) {
      res.push('addition');
    } else if (str1[i-2] -str1[i - 1] === str1[i]) {
      res.push('subtraction');
    } else if (str1[i-2] * str1[i -1] === str1[i]) {
      res.push('multiplication');
    } else {

        res.push('division');

    }
    return res.join(',');
  }
}

console.log(sayMeOperations('2,4,8'));
