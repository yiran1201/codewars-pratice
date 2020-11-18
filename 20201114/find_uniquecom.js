// comboWays = {
//   1: [[1]], // 放自己     => 1
//   2: [[2], [1, 1]], // 放自己,前面 + 1    => 1 + 1 = 2
//   3: [[3], [1, 2], [2, 1], [1, 1, 1]], // 放自己,所有前面 + 1 => 1 + 1 + 2 = 4
//   4: [
//     [4],
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

const n = 4;
const comboWays = {};
for (let current = 1; current <= n; current++) {
  //在1->n的数字一个一个扫描
  const ways = [[current]]; //把自己本身放在里面
  let previousNumber = current - 1;// 能开始去找第一个previous number，如果current是3那么previous number就是2
  console.log(`current: ${current}`);

  //拿比current小的全部数字对应的2D array
  while (previousNumber > 0) {
    const previousWays = comboWays[previousNumber]; // 2D

    // way is 1D
    for (const way of previousWays) {
      const gap = current - previousNumber; //目前数字和前一个数字的差
      ways.push([...way, gap]);
    }
    previousNumber--; //从前一个数字递减1，要推下一个数字 例如从3推到2，继续进入while loop
    console.log(`previousNumber: ${previousNumber}`);
    console.log('');
  }

  comboWays[current] = ways;//把ways放进comboWays里面跟current的数字对应上 comBoways【current】是KEY，ways对应的是value
  console.log(`comboWays: ${JSON.stringify(comboWays)}`);
  console.log('\n\n');
}
// console.log(comboWays);
// console.log(comboWays[n].length);
