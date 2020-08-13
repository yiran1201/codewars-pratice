function unluckyDays(year){
  let count=0;
  for (let i=0;i<12;i++){
    if(new Date(year,i,13).getDay()===5){
      count+=1
    }
  }return count
}
