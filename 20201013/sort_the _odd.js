function sortArray(input) {
  const oddSorted = input
    .slice()
    .filter((num) => num % 2 !== 0)
    .sort((a, b) => a - b);
  for (let i = 0; i < input.length; i++) {
    if (input[i] % 2 !== 0) {
      input[i] = oddSorted.shift();
    }
  }
  return input;
}
console.log(sortArray([5, 3, 2, 8, 1, 4]));

//input: [5, 3, 2, 8, 1, 4];
//sorted: [1, 3, 5];

//input: [1, 3, 2, 8, 5, 4];
