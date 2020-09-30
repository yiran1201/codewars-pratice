// Given a string "abc" and assuming that each letter in the string has a value equal to its position in the alphabet, our string will have a value of 1 + 2 + 3 = 6. This means that: a = 1, b = 2, c = 3 ....z = 26.

// You will be given a list of strings and your task will be to return the values of the strings as explained above multiplied by the position of that string in the list. For our purpose, position begins with 1.

// nameValue ["abc","abc abc"] should return [6,24] because of [ 6 * 1, 12 * 2 ]. Note how spaces are ignored.

// "abc" has a value of 6, while "abc abc" has a value of 12. Now, the value at position 1 is multiplied by 1 while the value at position 2 is multiplied by 2.

// Input will only contain lowercase characters and spaces.



function wordValue(a) {
  const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  let multiplier = 1
  let totalValue = 0
  let arrayOfNums = []
  for (let i=0; i< a.length; i++){

   for (let k = 0; k<a[i].length; k++){
     let currentLetter = a[i][k]
    if (currentLetter === " "){

    } else {
    totalValue += alphabet.indexOf(currentLetter) + 1
    }
   }
    arrayOfNums.push(multiplier * totalValue)
    multiplier += 1
    totalValue = 0
  }
  return arrayOfNums;
}

console.log(wordValue(["codewars","abc","xyz"]))
