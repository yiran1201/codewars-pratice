const solve=(arr)=>{
  let res={}
for(let i=0;i<arr.length;i++){
  if(!res[arr[i]]){
    res[arr[i]]=0
  }++res[arr[i]]
}
return res
}

console.log(solve([3,3,3,5,5,2]))
