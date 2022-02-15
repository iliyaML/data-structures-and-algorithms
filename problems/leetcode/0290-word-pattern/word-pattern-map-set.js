/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
const wordPattern = (pattern, s) => {
  const sArray = s.split(" ");
  if (pattern.length !== sArray.length) {
    return false;
  }

  const myMap = new Map();
  const mySet = new Set();
  for (let i = 0, l = pattern.length; i < l; ++i) {
    let letter = pattern.charAt(i);
    let word = sArray[i];

    if (myMap.has(letter)) {
      if (myMap.get(letter) !== word) {
        return false;
      }
    } else {
      if (mySet.has(word)) {
        return false;
      }
      mySet.add(word);
      myMap.set(letter, word);
    }
    console.log(myMap);
  }

  return true;
};
