/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = (s) => {
  // loop till the middle of the array
  for (let i = 0, mid = Math.floor(s.length / 2); i < mid; ++i) {
    // swap with the value on the other end of the array
    let tmp = s[i];
    s[i] = s[l - 1 - i];
    s[l - 1 - i] = tmp;
  }
  return s;
};
