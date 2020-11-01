function arraySum(inputs, tests) {
  // Array.from(set) 将set变回array
  inputs = Array.from(new Set(inputs));
  const testSet = new Set(tests);
  const inputSet = new Set();
  for (let i = 0; i < inputs.length - 1; i++) {
    for (let j = i + 1; j < inputs.length; j++) {
      inputSet.add(inputs[i] + inputs[j]);
    }
  }
  for (const num of inputSet) {
    if (testSet.has(num)) {
      return true;
    }
  }
  return false;
}

console.log(arraySum([-1, 8, 3], [3, 7, 2]));
console.log(arraySum([9, 6, 12], [1, 2, 3]));

i = 1
[2, 3, 4, 5]
