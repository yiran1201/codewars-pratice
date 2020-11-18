//1.keep devideing the n
//2.use variable to track the remainder
//3.use
const transferBinary = (n) => {
  const res = [];
  for (let i = n; i > 0; i = parseInt(i / 2)) {
    res.push(i % 2);
  }
  return res.reverse().join('')
};

console.log(transferBinary(100));
