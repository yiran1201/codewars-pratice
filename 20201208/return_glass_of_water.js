function hydrate(s) {
  s = s.replace('and', ',');
  const words = s.split(',');
  const sum = words.reduce((acc, word) => {
    acc = acc + Number(word[1]);
    return acc;
  }, 0);
  // if(sum>1){
  //   return sum +' glasses of water'
  // }else{
  //   return '1 glass of water'
  // }
  return `${sum} ${sum > 1 ? 'glasses' : 'glass'} of water`;
  // return units;
}

console.log(hydrate('1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer'));
