/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {string[]} ops
 * @return {number}
 */
const calPoints = (ops) => {
  // initialize our empty stack
  let stack = [];

  // iterate through all elements in ops
  for (let i = 0, l = ops.length; i < l; ++i) {
    if (ops[i] === "+") {
      stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
    } else if (ops[i] === "D") {
      stack.push(2 * stack[stack.length - 1]);
    } else if (ops[i] === "C") {
      stack.pop();
    } else {
      // store the values as a number
      stack.push(ops[i] * 1);
    }
  }

  // return the sum of the stack
  return stack.reduce((a, b) => a + b, 0);
};
