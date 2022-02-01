/**
 * Time Complexity: O(n log n)
 * Space Complexity: O(1), assume sorting does not take additional space
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
  // basic checks, can't be anagram if length are not the same
  if (s.length !== t.length) {
    return false;
  }
  const sortedS = s.split("").sort().toString();
  const sortedT = t.split("").sort().toString();

  return sortedS === sortedT;
};
