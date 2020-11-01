function arraySum(inputs, tests) {
  // Write your code here
  inputs = Array.from(new Set(inputs));
  const testSet = new Set(tests);
  const inputSet = new Set()
  for (let i = 0; i < inputs.length - 1; i++) {
      for (let j = i + 1; j < inputs.length; j++) {
       inputSet.add(inputs[i]+inputs[j])
      }
  }
  for (const num of inputSet) {
      if (testSet.has(num)) {
          return true;
      }

  }
  return false
}
