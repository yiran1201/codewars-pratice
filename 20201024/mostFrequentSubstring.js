function mostFrequentSubstring(words, k) {
  const countMap = {};
  for (const word of words) {
    for (let i = 0; i + k <= word.length; i++) {
      const key = word.slice(i, i + k);
      countMap[key] = countMap[key] + 1 || 1;
    }
  }
  let res = ['', 0];
  for (const [key, cnt] of Object.entries(countMap)) {
    if (cnt < 0) continue;
    if (cnt > res[1]) {
      res = [key, cnt];
    }
    if (cnt === res[1] && key < res[0]) {
      res = [key, cnt];
    }
  }
  return res[0];
}

// console.log(mostFrequentSubstring(['apple', 'mate', 'plate'], 2));
console.log(mostFrequentSubstring(['apple', 'mate', 'plate'], 3));
