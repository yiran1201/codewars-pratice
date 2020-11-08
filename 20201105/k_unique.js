function KUniqueCharacters(str) {
  /** 1. separate `k` and the `letters` string. */
  const k = Number(str[0]);
  const letters = str.slice(1);

  const indexMap = {};
  let start = 0;
  let maxResult = '';
  for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];
    indexMap[letter] = i;

    const letterIndexParis = Object.entries(indexMap).sort(
      (pairA, pairB) => pairA[1] - pairB[1]
    );
    if (letterIndexParis.length > k) {
      const smallPair = letterIndexParis.shift();
      const targetLetter = smallPair[0];
      const targetIndex = smallPair[1];
      start = targetIndex + 1;
      delete indexMap[targetLetter];
    }

    if (letterIndexParis.length === k) {
      const tmpResult = letters.slice(start, i + 1);
      if (tmpResult.length > maxResult.length) {
        maxResult = tmpResult;
      }
    }
  }
  return maxResult;
}
//                              0123456
console.log(KUniqueCharacters('3aabacbebebe') === 'cbebebe');
console.log(KUniqueCharacters('2aabbcbbbadef') === 'bbcbbb');

//const indexMap = {e: 10, f: 11};
//let start = 10; // head + 1, default 0
//let tmpResult = ''; // letters.slice(start, i + 1)
//let maxResult = 'bbcbbb';
