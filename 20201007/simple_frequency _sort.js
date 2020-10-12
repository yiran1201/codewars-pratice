const solve = (arr) => {
  // 1. record the frequency
  const result = {};
  for (const num of arr) {
    if (num in result) {
      result[num] = result[num] + 1; //result[num] 是value，num是key，5和7行往object里面放key和value
    } else {
      result[num] = 1;
    }
  }


  // 2. convert frequency object to array
  const frequencies = [];
  for (const num in result) {
    // 对于Object来说只能用For in loop来读key
    frequencies.push([num, result[num]]);
  }

  // 3. sort by frequency
  const sortedFrequencies = frequencies.sort((a, b) => { //比较[ '2', 1 ], [ '3', 3 ]
    if (a[1] > b[1]) return -1; // a[1]的frequency>b[1]frequency，把a放的更前
    return 0; // 位置不变
  });
  console.log(sortedFrequencies)
  // 4. ...
  const finalResult = [];
  for (const pair of sortedFrequencies) {
    const num = pair[0];
    const freq = pair[1];
    for (let i = 0; i < freq; i++) {
      finalResult.push(Number(num));
    }
  }
  return finalResult;
};

console.log(solve([2, 3, 5, 3, 7, 9, 5, 3, 7]));
