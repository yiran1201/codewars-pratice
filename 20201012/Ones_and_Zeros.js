function binaryArrToNum(arr) {
  let sum = 0;
  let base = 0;
  while (arr.length > 0) {
    let digit = arr.pop();
    sum += digit * Math.pow(2, base);
    base += 1;
  }
  return sum;
}

// function binaryArrToNum(arr) {
//   let sum = 0;
//   for (let i = arr.length - 1; i >= 0; i--) {
//     const base = arr.length - 1 - i;
//     sum += arr[i] * Math.pow(2, base);
//   }
//   return sum;
// }
console.log(binaryArrToNum([1, 0, 0, 1, 1]));
// 1 + 2 + 0 + 0 + 16 = 19
// 1 * 2 ^ 0 + 1 * 2 ^ 1 + 0 * 2 ^ 2 + 0 * 2 ^ 3 + 1 * 2 ^ 4
// digit * 2 ^ base
//Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
