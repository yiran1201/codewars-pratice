// The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.
// Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.
// Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?
// Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO.1.

// tickets([25, 25, 50]) // => YES
// tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
// tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)

/**
 *
 * 1. If 1st is not 25, then return NO
 * 2. Maintain an object wallet: {25: 0, 50: 0, 100: 0}
 * 3. Check if the wallet can make enough change to the client each time.
 */

function tickets(peopleInLine) {
  if (peopleInLine[0] !== 25) return 'NO';
  const wallet = {25: 0, 50: 0};
  for (const money of peopleInLine) {
    if (money === 25) {
      wallet[25]++;
    } else if (money === 50) {
      if (wallet[25] === 0) return 'NO';
      wallet[25]--;
      wallet[50]++;
    } else {
      // 要找75元

      // 先消掉25元,剩50元
      if (wallet[25] === 0) return 'NO';
      wallet[25]--;

      // 情况1:优先消耗50元,如果有,就用掉50元,看下一个ticket
      if (wallet[50] > 0) {
        wallet[50]--;
        continue;
      }

      // 情况2: 兑2张25元      if (wallet[25] < 2) return 'NO';
      wallet[25] -= 2;
    }
  }
  // 只有看完所有的ticket,才能return YES
  return 'YES';
}

console.log(tickets([25, 25, 50]));
console.log(tickets([25, 100]));
console.log(tickets([25, 25, 50, 50, 100]));
console.log(
  tickets([
    25,
    25,
    25,
    100,
    25,
    50,
    25,
    100,
    25,
    25,
    25,
    100,
    25,
    25,
    50,
    100,
    25,
    25,
    25,
    100,
  ])
)


