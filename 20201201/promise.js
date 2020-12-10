const p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a == 3) {
    resolve('good');
  } else {
    reject('fail');
  }
});

p.then((message) => {
  console.log('this is great ' +  message);
}).catch((message) => {
  console.log('this is in the catch ' + message);
});
