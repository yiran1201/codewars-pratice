/**
 * 1. use a stack to carry the validate character
 * 2. use a isOpen check to identify valid characters
 * 3. join the stack to form the result.
 */
const removeParentheses = (s) => {
  const stack = [];
  let openCount = 0;
  for (const letter of s) {
    if (letter === '(') {
      // case 1
      openCount++;
    } else if (letter === ')') {
      // case 2
      openCount--;
    } else {
      // case 3: normal letter
      if (openCount === 0) {
        stack.push(letter);
      }
    }
  }
  return stack.join('');
};

// console.log(removeParentheses('example(unwanted thing)example'));
console.log(removeParentheses('a(b(c)e)aa'));
