const pairs = (ar) => {
  const count = 0;
  for (let i = 0; i < ar.length; i++) {
    const elem = arr[i];
    if (i % 2 === 0) {
      if (arr[i + 1] - elem === 1 || elem - arr[i + 1] === 1) {
        count += 1;
      }
    }
  }
  return count;
};

// pairs([1,2,5,8,-4,-3,7,6,5]) = 3
// The pairs are selected as follows [(1,2),(5,8),(-4,-3),(7,6),5]
// --the first pair is (1,2) and the numbers in the pair are consecutive; Count = 1
// --the second pair is (5,8) and are not consecutive
// --the third pair is (-4,-3), consecutive. Count = 2
// --the fourth pair is (7,6), also consecutive. Count = 3.
// --the last digit has no pair, so we ignore.
