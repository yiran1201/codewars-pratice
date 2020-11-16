/*
1. 每个元素自己相加直到和=x,如果有记录为Comb
2.两两元素相加，如果和=x,记录Comb，如果两元素不相同 记录（a b )(b a)
3.

input: arr = [1, 2, 3]
#      	x =  4
# combinations -> (1, 1, 1, 1) (1, 1, 2) (1, 2, 1) (1, 3) (2, 1, 1) (2, 2) (3, 1)

*/

// const findComb = (n) => {};

// n = 4;

// comboWays = {
//   1: [[1]], // 放自己     => 1
//   2: [[2], [1, 1]], // 放自己,前面 + 1    => 1 + 1 = 2
//   3: [[3], [1, 2], [2, 1], [1, 1, 1]], // 放自己,所有前面 + 1 => 1 + 1 + 2 = 4
//   4: [
//     [1, 3],
//     [2, 2],
//     [1, 1, 2],
//     [3, 1],
//     [1, 2, 1],
//     [2, 1, 1],
//     [1, 1, 1, 1],
//   ], // => 1 + 2 + 4
// };

// const n = 3;
// comboWays = {
//   1: [[1]], //1
//   2: [[1, 1], [2]], //1+1=2
//   3: [[1, 2], [1, 1, 1], [2, 1], [3]], //1+2+1=4
// };

const n = 5;
const comboWays = {};
for (let current = 1; current <= n; current++) {
  const ways = [[current]];
  let previousNumber = current - 1;
  while (previousNumber > 0) {
    const previousWays = comboWays[previousNumber]; // 2D
    for (const way of previousWays) {
      // way is 1D
      const gap = current - previousNumber;
      ways.push([...way, gap]);
    }
    previousNumber--;
  }
  comboWays[current] = ways;
}
console.log(comboWays);
console.log(comboWays[n].length);
