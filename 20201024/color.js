function colorFence(length) {
  // const colored = new Array(length).fill(false);

  //只执行一次
  const colored = [];
  for (let i = 0; i < length; i++) {
    colored.push(false);
  }

  // 以下会被reuse
  return function (left, right) {
    for (let i = left; i <= right; i++) {
      colored[i] = true; // 涂黑
    }
    return colored.filter((color) => color === false).length;
  };
}

const colorIntervals = colorFence(20); // this is a function,理解为一个function instance, inheritance with an array
console.log(colorIntervals(18, 18)); // 19
console.log(colorIntervals(0, 3)); // 15
console.log(colorIntervals(17, 19)); // 13
console.log(colorIntervals(0, 19)); // 0
// [false, true, false, true, false];


// function colorFence(length) {
//   const colored = new Array(length).fill(false);
//   return (left, right) => {
//     for (let i = left; i <= right; i++) {
//       colored[i] = true;
//     }
//     return colored.filter((color) => color === false).length;
//   };
// }

// const colorIntervals = colorFence(20);
// console.log(colorIntervals(18, 18));
// console.log(colorIntervals(0, 3));
// console.log(colorIntervals(17, 19));
// console.log(colorIntervals(0, 19));
需
