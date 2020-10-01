
function highAndLow(numbers){
let nums=numbers.split('')
let sorted=nums.sort((a,b)=>a-b)
return sorted[sorted.length-1]+" "+sorted[0]
}

console.log(highAndLow('3,4,6,8'))

