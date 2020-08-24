function sumTwoSmallestNumbers(numbers) {
  for (let item of numbers) {
    if (item > 0) {
     numbers.sort((a, b) => a - b);
     return numbers[0] + numbers[1];
    }
  }
}
