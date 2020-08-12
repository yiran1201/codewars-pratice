function maxDiff(list) {
  let arr = list.sort((a, b) => a - b);

    return arr[arr.length - 1] - arr[0];
  }



