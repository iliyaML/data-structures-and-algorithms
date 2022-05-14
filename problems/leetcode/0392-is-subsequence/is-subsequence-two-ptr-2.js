/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = (s, t) => {
  let pointerA = 0;
  let pointerB = 0;

  while (pointerB < t.length) {
    if (s[pointerA] === t[pointerB]) {
      ++pointerA;
    }
    ++pointerB;
  }

  return pointerA === s.length;
};
