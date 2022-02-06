/**
 * Time Complexity: O(n), size of s
 * Space Complexity: O(1), we use a map, but it has fixed size of 3
 * @param {string} s
 * @return {number}
 */
const countGoodSubstrings = (s) => {
  let count = 0;

  // key: character, value: frequency
  const myMap = new Map();

  // sliding window algorithm
  let start = 0;
  for (let end = 0, l = s.length; end < l; ++end) {
    // add character to our map and update the frequency
    myMap.set(s.charAt(end), (myMap.get(s.charAt(end)) || 0) + 1);

    // if number of letters in our map is equal to 3
    if (end - start + 1 === 3) {
      // if we have unique characters, update count
      if (myMap.size === 3) {
        ++count;
      }

      // move the window
      // by decrementing frequency of character at the start (and delete if zero)
      // and incrementing start
      myMap.set(s.charAt(start), (myMap.get(s.charAt(start)) || 0) - 1);
      if (myMap.get(s.charAt(start)) === 0) {
        myMap.delete(s.charAt(start));
      }
      ++start;
    }
  }

  return count;
};
