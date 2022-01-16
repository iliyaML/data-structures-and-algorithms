/**
 * Time Complexity: O(n)
 * Space Complexity: O(n), recursive call stack
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = (s, startIndex = 0, endIndex = s.length - 1) => {
  // base case, end the recursion if start index is greater or equal to end index
  if (startIndex >= endIndex) {
    return;
  }

  // perform swap
  let tmp = s[startIndex];
  s[startIndex] = s[endIndex];
  s[endIndex] = tmp;

  // perform this recursively
  reverseString(s, startIndex + 1, endIndex - 1);

  // return modified array
  return s;
};
