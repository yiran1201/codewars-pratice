const promiseCombiner = async (...promises) => {
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
};

// {Object: message, showDiff...}
const sleep = (time) =>
  new Promise((resolve, reject) => {
    console.log('start sleeping');
    setTimeout(() => {
      if (time % 2 === 0) {
        resolve('hahaha');
      } else {
        reject('cannot fall asleep');
      }
    }, time);
    resolve()
  });

sleep(1001)
  .then((data) => {
    // await
    console.log(data);
    console.log('resolve promise');
  })
  .catch((e) => {
    console.log(e);
    console.log('fail promise');
  });
