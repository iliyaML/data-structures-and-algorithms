/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = (tokens) => {
  const stack = [];
  for (let token of tokens) {
    if (token === "+") {
      stack.push(stack.pop() + stack.pop());
    } else if (token === "-") {
      const item1 = stack.pop();
      const item2 = stack.pop();
      stack.push(item2 - item1);
    } else if (token === "*") {
      stack.push(stack.pop() * stack.pop());
    } else if (token === "/") {
      const item1 = stack.pop();
      const item2 = stack.pop();
      stack.push(Math.trunc(item2 / item1));
    } else {
      stack.push(Number(token));
    }
  }
  return stack[0];
};
