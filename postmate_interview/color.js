function colorFence(length) {
  // const colored = new Array(length).fill(false);

  //只执行一次
  const colored = [];
  for (let i = 0; i < length; i++) {
    colored.push(false);
  }
  //比如fence长度=5，就会有[false, false, false, false,false]

  // 以下会被reuse
  return function (left, right) {
    for (let i = left; i <= right; i++) {
      colored[i] = true; // 涂黑
    }
    return colored.filter((color) => color === false).length;
  };
}

// const colorIntervals = colorFence(20); // this is a function,理解为一个function instance, inheritance with an array
// console.log(colorIntervals(18, 18)); // 19
// console.log(colorIntervals(0, 3)); // 15
// console.log(colorIntervals(17, 19)); // 13
// console.log(colorIntervals(0, 19)); // 0

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

class ColorFence {
  colored = [];

  constructor(length) {
    //只执行一次
    for (let i = 0; i < length; i++) {
      this.colored.push(false);
    }
  }

  //比如fence长度=5，就会有[false, false, false, false,false]

  // 以下会被reuse
  colorIntervals(left, right) {
    for (let i = left; i <= right; i++) {
      this.colored[i] = true; // 涂黑
    }
    return this.colored.filter((color) => color === false).length;
  }
}

const cf = new ColorFence(20);
console.log(cf.colorIntervals(18, 18));
console.log(cf.colorIntervals(0, 3));
console.log(cf.colorIntervals(17, 19));
console.log(cf.colorIntervals(0, 19));
