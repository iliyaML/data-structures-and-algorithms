/**
 * Brute Force
 * Time Complexity: O(n^2)
 * Space Complexity: O(n)
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  let longestLen = 0;

  for (let i = 0, l = s.length; i < l; ++i) {
    const set = new Set(s.charAt(i));

    for (let x = i + 1; x < l; ++x) {
      const letter = s.charAt(x);

      if (set.has(letter)) {
        break;
      } else {
        set.add(letter);
      }
    }

    // update longest length if set is bigger than what we have
    if (set.size > longestLen) {
      longestLen = set.size;
    }
  }

  return longestLen;
};
