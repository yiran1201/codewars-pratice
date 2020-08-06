
function allNonConsecutive(arr) {
  let res = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] !== 1)
      res.push({ i: i, n: arr[i] });
  }
  return res
}