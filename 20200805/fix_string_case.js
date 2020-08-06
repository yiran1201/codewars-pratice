function solve(s) {
  let upper = 0;
  let lower = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      upper++;

    } else {
      lower++;
    }
  }
  return lower < upper ? s.toUpperCase() : s.toLowerCase();

}