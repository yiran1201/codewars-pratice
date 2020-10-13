function binaryArrToNum(arr) {
  return parseInt(arr.join(''), 2);
}

console.log(binaryArrToNum([1,0,0,1,1]))
