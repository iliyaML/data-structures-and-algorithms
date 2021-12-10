/**
 * Use a stack to keep track of open brackets
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
  const l = s.length;
  // simple case: if string length is odd, then it's not valid
  if (l % 2 !== 0) {
    return false;
  }

  // intiialize our stack (use array as underlying data structure)
  const stack = [];
  // create a map with closing brackets as keys and open brackets as values
  const myMap = new Map([
    [")", "("],
    ["}", "{"],
    ["]", "["],
  ]);

  for (let i = 0; i < l; ++i) {
    const curChar = s.charAt(i);
    if (!myMap.has(curChar)) {
      // curChar is an open bracket, so we push it to our stack
      stack.push(curChar);
    } else {
      // curChar is a closed bracket
      const peekItem = stack[stack.length - 1]; // get opening bracket at the top of our stack
      if (myMap.get(curChar) === peekItem) {
        // if they match
        stack.pop();
      } else {
        // otherwise, it's not valid
        return false;
      }
    }
  }

  // if the stack is empty once we exit the loop, then it's valid
  return stack.length === 0;
};
