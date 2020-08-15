function getStrings(city) {
  let letters = city.toLowerCase().split('');
  let letterToCount = {};
  const orders = [];
  for (let letter of letters) {
    if (letter === ' ') {
      continue;
    }
    //continue 指忽略for loop里面的一步，进行下一步，Las Vegas 忽略空格 跳到v
    // letterToCount[letter] = letterToCount[letter] + 1 || 1;
    //有没有这个letter这个key对应的value，如果有有就+1，没有默认设成1
    if (letter in letterToCount) {
      letterToCount[letter] = letterToCount[letter] + 1;
    } else {
      letterToCount[letter] = 1;
      orders.push(letter);
    }
  }

  const res = [];
  for (const letter of orders) {
    const stars = '*'.repeat(letterToCount[letter]);
    const str = letter + ':' + stars;
    res.push(str);
  }
  return res.join(',');
}

console.log(getStrings('Las Vegas'));
