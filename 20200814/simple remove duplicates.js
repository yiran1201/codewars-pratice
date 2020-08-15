
// Remove the 3's at indices 0 and 3
// followed by removing a 4 at index 1
//solve([3, 4, 4, 3, 6, 3]); // => [4, 6, 3]
function solve(arr){
 arr.reverse()
 const set= new Set()
 const orders = []
  for (let item of arr) {
   if(!set.has(item)) {
     set.add(item)
     orders.push(item)
   }}
  return orders.reverse()

}

// arr [3, 6, 3, 4, 4, 3]
// set {3,6,4}
//set的顺序是不知道的，所以需要order来确定顺序
// ord [3,6,4]
