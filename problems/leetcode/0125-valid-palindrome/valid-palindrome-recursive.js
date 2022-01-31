/**
 * Time Complexity: O(n)
 * Space Complexity: O(n), recursive call stack
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
  // regex: [^a-zA-Z0-9] is equivalent to [\W_]
  const cleanString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // call recursvie method
  return _isPalindrome(cleanString);
};

const _isPalindrome = (s) => {
  // base case
  if (s.length === 0 || s.length === 1) {
    return true;
  }

  if (s.charAt(0) === s.charAt(s.length - 1)) {
    return _isPalindrome(s.substring(1, s.length - 1));
  }

  return false;
};
