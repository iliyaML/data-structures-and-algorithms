/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
const uncommonFromSentences = (s1, s2) => {
  // convert both strings into array of words
  const s1Arr = s1.split(" ");
  const s2Arr = s2.split(" ");

  // map used to store:
  // key: word
  // val: frequency
  const s1Map = new Map();
  const s2Map = new Map();

  // populate our maps
  for (let word of s1Arr) {
    s1Map.set(word, s1Map.has(word) ? s1Map.get(word) + 1 : 1);
  }

  for (let word of s2Arr) {
    s2Map.set(word, s2Map.has(word) ? s2Map.get(word) + 1 : 1);
  }

  // iterate through all the keys/words in s1 map
  for (let word of s1Map.keys()) {
    // if the key exists in both maps, delete the key in both maps
    if (s1Map.has(word) && s2Map.has(word)) {
      s1Map.delete(word);
      s2Map.delete(word);
    }
    // if the frequency is greater than 1, delete the key from s1 map
    if (s1Map.get(word) > 1) {
      s1Map.delete(word);
    }
  }

  // do the same for s2 map
  for (let word of s2Map.keys()) {
    if (s1Map.has(word) && s2Map.has(word)) {
      s1Map.delete(word);
      s2Map.delete(word);
    }
    if (s2Map.get(word) > 1) {
      s2Map.delete(word);
    }
  }

  // return the remaining keys (uncommon words) from s1 and s2 maps
  return [...s1Map.keys(), ...s2Map.keys()];
};
