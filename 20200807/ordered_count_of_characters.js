// Count the number of occurrences of each character and return it as a list of
// tuples in order of appearance. For empty output return an empty list.
// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

var orderedCount = function (text) {
  let arr = text.split('')
  let count=0;
  let newArr=[]
  for (let item of arr){
    if(item===item){
      count++;
      newArr.push(['item',count])
     
    }else{
      newArr.push('item',1)
    }
  }
  return [];
}