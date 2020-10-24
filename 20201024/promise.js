async function promiseCombiner(...promises) {
  if (promises.length === 0) {
    throw new Error('At least one argument is required');
  }
  let sum = 0;
  let err = 0;
  for (const promise of promises) {
    await promise
      .then((result) => {
        sum += result;
      })
      .catch((e) => {
        sum += 0;
        err += 1;
      });
  }
  if (err === promises.length) return new Error(0);
  return sum;
}

// {Object: message, showDiff...}
