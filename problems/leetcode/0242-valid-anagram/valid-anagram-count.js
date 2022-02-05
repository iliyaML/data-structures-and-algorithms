/**
 * Time Complexity: O(n), n is the size of the string
 * Space Complexity: O(1), array is of fixed size since it only contains lowercase letters
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
  // basic checks, can't be anagram if length are not the same
  if (s.length !== t.length) {
    return false;
  }

  // at this point, s.length and t.length are equal

  // array to keep track of character occurences
  const arrCount = new Array(26).fill(0);
  for (let i = 0, l = s.length; i < l; ++i) {
    ++arrCount[s.charCodeAt(i) - "a".charCodeAt(0)];
    --arrCount[t.charCodeAt(i) - "a".charCodeAt(0)];
  }

  // at this point, if both are anagrams, the arrCount values should all be zeroes
  for (let value of arrCount) {
    if (value !== 0) {
      // if not, return false
      return false;
    }
  }

  // then they are anagrams
  return true;
};
