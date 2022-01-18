/**
 * Time Complexity: O(m), m = paragraph, n = banned
 * Space Complexity: O(m + n), store paragraph words in map and banned words in set
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
const mostCommonWord = (paragraph, banned) => {
  // create a set to store the banned words
  const bannedSet = new Set(banned);

  // create an array for all the words in paragraph text
  // remove all other characters and convert them to lowercase
  const paragraphText = paragraph
    .replace(/[!?',;.]/g, " ")
    .toLowerCase()
    .split(" ");

  // map to store word and frequency
  const myMap = new Map();

  let commonWord = "";
  let wordFrequency = 0;

  // loop through all the words in the paragraph
  for (let i = 0, l = paragraphText.length; i < l; ++i) {
    const curWord = paragraphText[i];

    // check to see if current word is not in the banned set
    // and word length is not zero
    if (bannedSet.has(curWord) === false && curWord.length > 0) {
      // update the map
      if (myMap.has(curWord)) {
        myMap.set(curWord, myMap.get(curWord) + 1);
      } else {
        myMap.set(curWord, 1);
      }

      // update word frequency and common word
      if (myMap.get(curWord) > wordFrequency) {
        wordFrequency = myMap.get(curWord);
        commonWord = curWord;
      }
    }
  }

  return commonWord;
};
