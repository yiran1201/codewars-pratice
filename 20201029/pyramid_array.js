/*
pyramid(0) => [ ]
pyramid(1) => [ [1] ]
pyramid(2) => [ [1], [1, 1] ]
pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]

describe('basic tests', () => {
  it("Testing for 0", () => assert.deepEqual(pyramid(0), []));
  it("Testing for 1", () => assert.deepEqual(pyramid(1), [[1]]));
  it("Testing for 2", () => assert.deepEqual(pyramid(2), [[1], [1, 1]]));
  it("Testing for 3", () => assert.deepEqual(pyramid(3), [[1], [1, 1], [1, 1, 1]]));
});
**/

function pyramid(n) {
  //1. use an array to record the length of element which are also arrays
  //2. push 1 to each element by index+1 times
  //3. if n=0, return []

  // 1. use 2D array to record the final result
  // 2. push the inner array in an ascending order,
  //  for example: 1 -> [1], 2 -> [1, 1], 3 -> [1, 1, 1]... n -> new Array(n).fill(1)
  // 3. return res
  const res = [];
  for (let i = 1; i <= n; i++) {
    res.push(new Array(i).fill(1));
  }
  return res;
}

console.log(pyramid(0));
console.log(pyramid(1));
console.log(pyramid(2));
console.log(pyramid(3));
