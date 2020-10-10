const solve=(arr)=>{

  result = { };
  for(let i = 0; i < arr.length; ++i) {
      if(!result[arr[i]])
          result[arr[i]] = 0;
      ++result[arr[i]];
  }
}

console.log(solve([2,3,7,7,7,5,5,4]))
