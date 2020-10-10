// ([2,3,5,3,7,9,5,3,7])
function solve(arr){
  var r={}
  for(var n of arr) r[n]=r[n]+1||1
  return arr.slice().sort((a,b)=>r[b]-r[a]||a-b)

}
console.log(solve([2,3,3,3,5,6]))

