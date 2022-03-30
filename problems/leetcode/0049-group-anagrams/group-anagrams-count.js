/**
 * Time Complexity: O(m*n), m = total number of strings, n = average length of a string
 * Space Complexity: O(m), map to stores all the strings
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
  // a map to store array of count (string) as keys and lists of strs as values
  const myMap = new Map();

  for (let str of strs) {
    // create an array of size 26 (fits all the alphabets) and fill them with zero
    let arrCount = new Array(26).fill(0);

    for (let i = 0, l = str.length; i < l; ++i) {
      // increment the count for the character/unicode we encounter
      ++arrCount[str.charCodeAt(i) - "a".charCodeAt(0)];
    }

    // generate a string of array count to be used as a map key
    let strOfCount = arrCount.toString();

    if (myMap.has(strOfCount)) {
      // if the map already has the key, append the new str to the value
      myMap.set(strOfCount, [...myMap.get(strArray), str]);
    } else {
      // if not, we add a key to the map and store the str
      myMap.set(strOfCount, [str]);
    }
  }

  // return the map values as a list of array
  return [...myMap.values()];
};
