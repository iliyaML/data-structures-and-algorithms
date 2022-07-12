/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {string} s
 * @return {string}
 */
const frequencySort = (s) => {
  // populate map with the following
  // key: character
  // val: frequency
  let map = new Map();

  for (let char of s.split("")) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  // create a bucket of size s + 1 (includes the zeroth index)
  // index: represent the frequency
  // value: list of characters (ex: ['c', 'd'])
  let bucket = new Array(s.length + 1);
  for (let [char, frequency] of map) {
    if (!bucket[frequency] === undefined) {
      bucket[frequency] = [];
    }
    bucket[frequency].push(char);
  }

  // create our result by going through our bucket
  // from highest index (highest frequency)
  // to the lowest index
  let result = "";
  for (let frequency = bucket.length - 1; frequency >= 0; --frequency) {
    if (bucket[frequency] !== undefined) {
      for (let char of bucket[frequency]) {
        for (let i = 0; i < frequency; ++i) {
          result += char;
        }
      }
    }
  }

  return result;
};
