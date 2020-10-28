/**
 * 1. use an array 'ranges', to record whether the time slot is being occupied or not.
 * This will yield an array that shows the un-occupied time slot [false].
 * 2. use a pointer 'start', to record the `from` index, initialize it as 0.
 * 3. iterate through the 'ranges' array, when we find a value switch, we do the
 * following, otherwise, skip to the next element.
 *  - if we have a false -> true: we push ({from: start, to: i})
 *  - if we find a true -> false: we set start = i
 * 4. after we finish the iteration, we need to check if the 'start' < limit (missing record),
 * if so push({from: start, to: limit})
 */
const duration = (times, limit) => {
  // TODO
  const ranges = new Array(limit).fill(false);

  for (const time of times) {
    const from = time.from;
    const to = time.to;
    for (let i = from; i < to; i++) {
      ranges[i] = true;
    }
  }
  console.log(ranges);

  let start = 0;
  const res = [];
  for (let i = 1; i < ranges.length; i++) {
    // TODO
    if (ranges[i] === ranges[i - 1]) continue;
    // value must change
    if (ranges[i] === true) {
      // TODO
      res.push({from: start, to: i});
    } else {
      // TODO
      start = i;
    }
  }
  if (start < limit) {
    res.push({from: start, to: limit});
  }
  return res;
};

console.log(
  duration(
    [
      {from: 5, to: 15},
      {from: 25, to: 30},
    ],
    40
  )
);

// console.log(
//   duration(
//     [
//       {from: 0, to: 2},
//       {from: 5, to: 15},
//       {from: 25, to: 30},
//     ],
//     40
//   )
// );

// console.log(
//   duration(
//     [
//       {from: 0, to: 10},
//       {from: 1, to: 6},
//       {from: 4, to: 5},
//       {from: 2, to: 8},
//       {from: 15, to: 20},
//       {from: 25, to: 30},
//     ],
//     40
//   )
// );

// console.log(
//   duration(
//     [
//       {from: 10, to: 20},
//       {from: 5, to: 15},
//       {from: 35, to: 50},
//       {from: 30, to: 40},
//     ],
//     60
//   )
// );
