function solve(arr) {
  let tmp = arr[0]; //[1,2]

  for (let i = 1; i < arr.length; i++) {
    const cur = arr[i];
    const next = [];
    for (const tmpVal of tmp) {
      for (const curVal of cur) {
        const num = tmpVal * curVal;
        next.push(num);
      }
    }
    tmp = next;
  }
  tmp.sort((a, b) => b - a)
  return tmp[0]
}