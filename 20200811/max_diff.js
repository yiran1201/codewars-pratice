function maxDiff(list) {
  if (list.length < 2) {
    return 0;
  }
  list.sort((a, b) => a - b);
  return list[list.length - 1] - list[0];
}
