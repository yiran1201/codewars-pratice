/**
 * 1. iterate each word
 * 2. in each word, use a countMap to record the sub-string of length k
 * 3. use [resultString, frequency] to track the result
 *  - if find max frequency, update
 *  - if find same frequency and lexico-smaller string, update
 */
function mostFrequentSubstring(words, k) {
  const countMap = {};
  for (const word of words) {
    for (let i = 0; i + k <= word.length; i++) {
      // ['apple','mate']如果K=1.word.slice(0,1)=>拿'a'
      const key = word.slice(i, i + k);
      // if (key in countMap) {
      //   countMap[key] = countMap[key] + 1;
      // } else {
      //   countMap[key] = 1;
      // }
      countMap[key] = countMap[key] + 1 || 1; //{a:0,p:1,l:0,e:0}
    }
  }
   console.log(countMap)
  let maxString = '';
  let maxFreq = 0;
  for (const pair of Object.entries(countMap)) {

    const [key, cnt] = pair;
    if (cnt > maxFreq || (cnt === maxFreq && key < maxString)) {
      maxString = key;
      maxFreq = cnt;
    }

  }
  return maxString;
}

// console.log(mostFrequentSubstring(['apple', 'mate', 'plate'], 2));
console.log(mostFrequentSubstring(['apple', 'mate', 'plate'], 3));

// function leastFrequentSubstring(words, k) {
//   const countMap = {};
//   for (const word of words) {
//     for (let i = 0; i + k <= word.length; i++) {
//       // ['apple','mate']如果K=1.word.slice(0,1)=>拿'a'
//       const key = word.slice(i, i + k);
//       // if (key in countMap) {
//       //   countMap[key] = countMap[key] + 1;
//       // } else {
//       //   countMap[key] = 1;
//       // }
//       countMap[key] = countMap[key] + 1 || 1; //{a:0,p:1,l:0,e:0}
//     }
//   }
//   let maxString = '';
//   let minFreq = 100;
//   for (const pair of Object.entries(countMap)) {
//     const [key, cnt] = pair;
//     if (cnt < minFreq || (cnt === minFreq && key > maxString)) {
//       maxString = key;
//       minFreq = cnt;
//     }
//   }
//   return maxString;
// }

// console.log(leastFrequentSubstring(['apple', 'mate', 'plate'], 2));

// function findWordThatHasMostDistinctLetter(words) {

// }

// console.log(leastFrequentSubstring(['apple', 'mate', 'plate']) === 'plate');
