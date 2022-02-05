/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  // set to store our characters
  const mySet = new Set();

  let start = 0;
  let longest = 0;

  // increase our window
  for (let end = 0, l = s.length; end < l; ++end) {
    if (mySet.has(s[end])) {
      // shrink our window by
      // increasing start and remove items at the start
      while (mySet.has(s[end])) {
        mySet.delete(s[start]);
        ++start;
      }
    }

    // continue to add to the set
    mySet.add(s[end]);

    // update longest
    longest = Math.max(longest, mySet.size);
  }

  return longest;
};
