/*
1.用一个array‘ranges’来记录需要保留和不需要保留的片段（元素）, （默认初始都是false）不要的时间段是false,保留的部分时间段是true，最后要剩下false的部分
2.用一个指针'start'去开始，然后记录index要保留部分FROM的index，初始值为0
3.开始看每个array的元素，看元素是否从false转变为true。做以下几步
-当一个false->true 可以push [{from:start,to:i}]
-当 true->false 使得start=i, to到下一轮 false-> true 的i
循环结束完到最后，要看一下from的start和最后一个元素（duration）比大小，如果start<duration, push[{from:start.to:duration}]
-

**/

const calculateInverseRanges = (trimRanges, duration) => {
  const ranges = [];
  for (let i = 0; i < duration; i++) {
    ranges.push(false);
  }//这里是把range初始化全部定义为默认false
  for (let trimRange of trimRanges) {//看range里面每一个object，每个object里面有from和to
    const from = trimRange.from;
    const to = trimRange.to;
    for (let i = from; i <= to; i++) {
      ranges[i] = true;
    }
  }//这里是把已经被占用的时间标记成true
  let start = 0;
  let res = [];
  for (i = 0; i < ranges.length; i++) {
    if (ranges[i] === ranges[i - 1]) continue; //两个两个对比
    if (ranges[i] === true) { //如果false转变成true 指针从start从0开始，to就是到true的index
      res.push({from: start, to: i});
    } else {
      start = i; //true变回false的情况，start变成false的index
    }
  }
  if (start < duration) {//最后一个情况，start要永远小于duration
    res.push({from: start, to: duration});
  }
  return res;
};

console.log(
  calculateInverseRanges(
    [
      {from: 5, to: 15},
      {from: 25, to: 30},
    ],
    40
  )
);
