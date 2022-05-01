/**
 * Time Complexity: O(m + n)
 * Space Complexity: O(m + n)
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
const countWords = (words1, words2) => {
  // populate map for words1
  // key: word
  // val: frequency
  const myMap1 = new Map();
  for (let i = 0, l = words1.length; i < l; ++i) {
    myMap1.set(
      words1[i],
      myMap1.has(words1[i]) ? myMap1.get(words1[i]) + 1 : 1
    );
  }

  // do the same for words2
  const myMap2 = new Map();
  for (let i = 0, l = words2.length; i < l; ++i) {
    myMap2.set(
      words2[i],
      myMap2.has(words2[i]) ? myMap2.get(words2[i]) + 1 : 1
    );
  }

  // count the occurences
  let count = 0;
  for (let [key, val] of myMap1) {
    // key must exist in both maps and value must be equal to 1
    if (myMap2.get(key) === 1 && val === 1) {
      ++count;
    }
  }

  return count;
};
