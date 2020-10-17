/**
 * 1. Build a stack that only takes valid character.
 * 2. Joins the character to a string.
 *
 * Sample:
 * input: "abc#d##c"
 * stack: ['a','c']
 * 'ac'
 * - if see #, then pop the stack
 * - else, push to stack
 */
function cleanString(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '#') {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return stack.join('');
}

/**
 * Time Complexity
 * Space Complexity
 */

console.log(cleanString(''));
