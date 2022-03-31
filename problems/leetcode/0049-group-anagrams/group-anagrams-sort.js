/**
 * Time Complexity: O(m*n log n), m = total number of strings, n = average length of a string
 * Space Complexity: O(m), map to stores all the strings
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
  const myMap = new Map();

  for (let str of strs) {
    // sort the str (generally costs n log n time complexity)
    const sortedStr = str.split("").sort().join("");
    if (myMap.has(sortedStr)) {
      myMap.set(sortedStr, [...myMap.get(sortedStr), str]);
    } else {
      myMap.set(sortedStr, [str]);
    }
  }

  return [...myMap.values()];
};
