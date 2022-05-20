/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {string[]} words
 * @return {string[]}
 */
const commonChars = (words) => {
  // total number of lowercase letters
  const CHAR_LETTERS = 26;

  // create an array with default values of Infinity
  let countArr = new Array(CHAR_LETTERS).fill(Infinity);

  for (let word of words) {
    let characters = word.split("");

    let count1 = new Array(CHAR_LETTERS).fill(0);

    for (let char of characters) {
      ++count1[char.charCodeAt(0) - "a".charCodeAt(0)];
    }

    for (let x = 0; x < countArr.length; ++x) {
      countArr[x] = Math.min(countArr[x], count1[x]);
    }
  }

  let results = [];

  for (let i = 0; i < CHAR_LETTERS; ++i) {
    for (let j = 0; j < countArr[i]; ++j) {
      results.push(String.fromCharCode("a".charCodeAt(0) + i));
    }
  }

  return results;
};
