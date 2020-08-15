function sum(matrix) {
  let count = 0;
  const n = matrix.length;

  // desc
  for (let i = n; i >= 1; i--) {
    count += matrix[n - i][n - i];
  }

  // asc
  for (let i = 1; i <= n; i++) {
    count += matrix[n - i][i - 1];
  }
  return count;
}

// diagonals( [
//   [ 1, 2, 3 ],
//   [ 4, 5, 6 ],
//   [ 7, 8, 9 ]
// ] );
// 0,0 + 1,1 + 2,2
// 2,0 + 1,1 + 0,2

// n = matrix.length => 3
// (n - n, n - n)   (n - (n - 1), n - (n - 1))  (n-1),(n-1) desc
// (n-1,n-n)   (n-(n-1),n-(n-1))   (n-n,n-1) asc

// returns -> 30 // 1 + 5 + 9 + 3 + 5 + 7

console.log(
  sum([
    // col | j
    [1, 2, 3, 4], // row | i
    [4, 5, 6, 2],
    [7, 8, 9, 0],
    [0, 2, 3, 5]
  ])
);
