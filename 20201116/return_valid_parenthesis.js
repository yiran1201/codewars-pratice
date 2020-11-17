// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
// Example 4:

// Input: s = "([)]"
// Output: false
// Example 5:

// Input: s = "{[]}"
// Output: true

const parenthesisCheck = (s) => {
  if (s.length % 2 === 1) {
    return false;
  }
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const ele = s[i];
    if (ele === '(' || ele === '[' || ele === '{') {
      stack.push();
    } else {
      const top = stack.length - 1;
      if (
        (top === '(' && ele === ')') ||
        (top === '[' && ele === ']') ||
        (top === '{' && ele === '}')
      ) {
        stack.pop();
      }else{
        return false
      }
    }
  }
  return stack.length === 0;
};

// console.log(parenthesisCheck('{[]}'));
console.log(parenthesisCheck("(]"));
