function twoOldestAges(ages){

  let sorted= ages.sort((a,b)=>a-b)
return [sorted[sorted.length-2], sorted[sorted.length-1]]


}
console.log(twoOldestAges([1,4,6,9,3]))
