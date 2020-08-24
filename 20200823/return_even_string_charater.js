function evenChars(string) {
  if (string.length < 2 || string.length > 100) {
    return 'invalid string';
  } else {
    let res = [];
    for (i = 1; i < string.length; i += 2) {
      res.push(string[i]);
    }
    return res;
  }
}
