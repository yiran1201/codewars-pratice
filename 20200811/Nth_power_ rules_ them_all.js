function modifiedSum(a, n) {
  const nSum=a. reduce((acc, cur) => acc+ Math.pow(cur, n),0);
  const sum=a.reduce((a, b) => a + b);
  return nSum-sum;
}
