/**
 * Time Complexity: O(n^2), nested loops
 * Space Complexity: O(1)
 * @param {string} s
 * @return {number}
 */
const countSubstrings = (s) => {
  let results = 0;

  // loop through all the characters in the string
  for (let i = 0, l = s.length; i < l; ++i) {
    // do this for odd lengths
    results += _helper(s, i, i);

    // do this for even lengths
    results += _helper(s, i, i + 1);
  }
  return results;
};

const _helper = (s, left, right) => {
  let results = 0;
  // trick is to go from inside out to determine if they are palindromes
  // ensure left and right are within bounds
  // and if the values of s at left and right are the same
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    // update the result
    ++results;

    // move the pointers
    --left;
    ++right;
  }
  return results;
};
