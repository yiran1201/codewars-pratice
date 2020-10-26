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
