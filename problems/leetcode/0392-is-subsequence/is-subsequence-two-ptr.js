/**
 * Time Complexity: O(n), where n = s + t
 * Space Complexity: O(1)
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = (s, t) => {
  // s must be less than t, otherwise it's not a subsequence
  if (s.length > t.length) {
    return false;
  }

  // if the length are equal, check to see if the strings are equal
  if (s === t) {
    return true;
  }

  let savedIndex = 0;
  for (let i = 0, l = s.length; i < l; ++i) {
    let curChar = s[i];

    let x = savedIndex;
    for (let le = t.length; x < le; ++x) {
      if (t[x] === curChar) {
        savedIndex = x + 1;
        break;
      }
    }

    // if x is equal to the length of t, we didn't find anything
    if (x === t.length) {
      return false;
    }
  }

  // if we get to this point, then s is a subsequence
  return true;
};
