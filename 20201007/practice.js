const mirror=(data)=>{
const arr1=data.slice().sort((a,b)=>a-b)
const arr2= data.slice().sort((a,b)=>b-a).slice(1)
return arr1.concat(arr2)
}
console.log(mirror([35,75,2]))

