function mirror(data) {
  const sort = data.slice().sort((a, b) => a - b);
  return [...sort, ...sort.reverse().slice(1)];
}


console.log(mirror([6, 5, 8, 8, 67,1]));
