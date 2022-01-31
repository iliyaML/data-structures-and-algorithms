/**
 * Time Complexity: O(n), go through all the characters (reverse)
 * Space Complexity: O(n),
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
  // some basic checks
  if (s.length === 0 || s.length === 1) {
    return true;
  }

  // replace all fancy characters and convert to lower case
  // regex: [\W_] is equivalent to [^a-zA-Z0-9]
  let str = s.replace(/[\W_]+/g, "").toLowerCase();

  // if the string is the same as reversed string, then it is a valid palindrome
  return str === str.split("").reverse().join("");
};
