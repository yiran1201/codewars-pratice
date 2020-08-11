function solve(s) {
  let arr = s.split('');
  let count = 0;
  let countUpper = 0;
  let countLower = 0;
  let countSpecial = 0;

  for (let item of arr) {
    if ([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(Number(item))) {
      count++;
    } else if (['ABCDEFGHIJKLMNOPQRSTUVWXYZ'].includes(item)) {
      countUpper++;
    } else if (['abcdefghijklmnopqrstuvwxyz'].includes(item)) {
      countLower++;
    } else countSpecial++;
  }

  return [countUpper, countLower, count, countSpecial];
}

console.log(solve('AdkdDA123@#$'));
