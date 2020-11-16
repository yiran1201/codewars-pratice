/*
 1. use a `visited` map to store the valid shown letter
 2. use a `start` index to count the substring
 3. use a `longest` variable to store the result
 4. iterate through the string, if find a visited letter, reset the start index, update the longest result based on the map
*/

const longestSubstringLength = (s) => {
  const visited = {};
  let start = 0;
  let longest = '';

  for (let i = 0; i < s.length; i++) {
    const letter = s[i];

    if (visited[letter] !== undefined) {
      // 判断目前letter index是否出现过，如果出现，更新之前出现过的这个letter的index
      const oldIndex = visited[letter];
      start = oldIndex + 1;
      // console.log(`before: ${JSON.stringify(visited)}`);
      for (const mapLetter in visited) {
        //for in loop get the key
        if (visited[mapLetter] <= oldIndex) {
          delete visited[mapLetter];
        }
      }
      console.log(`after: ${JSON.stringify(visited)}`);
    }
    visited[letter] = i; // add current value and its index to visited
    if (i - start + 1 > longest.length) {
      //当前string 可以做出来的长度比之前的longest string长度要大
      longest = s.slice(start, i + 1);
      // console.log(`longest: ${longest}`);
    }
    // console.log(visited);
  }
  return longest.length;
};
//                                  01234
// console.log(longestSubstringLength('abacb') === 3);
// // console.log(longestSubstringLength('abacccefg') === 4);
//                                       |
console.log(longestSubstringLength('abacccebfg') === 5);
