function solve(str) {
  const letters = str.split('').filter(l => l !== ' ')
  let res = [];
  for (i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      res.push(letters.pop())
    }
    else {
      res.push(' ')
    }
  }
  return res.join('')
}

