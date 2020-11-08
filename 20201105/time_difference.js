function TimeDifference(strArr) {
  const TIME_MAX = 24 * 60;
  const times = [];
  for (const time of strArr) {
    let [hour, minute] = time
      .slice(0, -2)
      .split(':')
      .map((numStr) => Number(numStr));
    const amPm = time.slice(-2);

    if (hour === 12) hour = 0;
    hour = amPm === 'pm' ? (hour + 12) * 60 : hour * 60;
    let sum = hour + minute;
    times.push(sum);
  }

  times.sort((a, b) => a - b);
  let minDiff = Number.MAX_SAFE_INTEGER;
  for (let i = 1; i < times.length; i++) {
    minDiff = Math.min(minDiff, times[i] - times[i - 1]);
  }

  if (times.length > 1) {
    const last = times[times.length - 1];
    const first = times[0];
    const range = last - first;
    let realRange = last - first;
    if (TIME_MAX - range < range) {
      realRange = TIME_MAX - range;//
    }

    if (realRange < minDiff) {
      minDiff = realRange;
    }
  }
  return minDiff;
}

console.log(TimeDifference(['2:10pm', '1:30pm', '10:30am', '4:42pm']) === 40);
console.log(TimeDifference(['1:10pm', '4:40am', '5:00pm']) === 230);
console.log(TimeDifference(['10:00am', '11:45pm', '5:00am', '12:01am']) === 16);
console.log(TimeDifference(['10:00am', '11:58am', '5:00am', '12:01pm']) === 3);
