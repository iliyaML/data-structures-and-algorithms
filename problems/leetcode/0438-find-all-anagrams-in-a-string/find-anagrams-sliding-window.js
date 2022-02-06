/**
 * Time Complexity: O(n), n is the size of s
 * Space Complexity: O(1), fixed array size since it can only contain lowercase letters (26)
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = (s, p) => {
  const result = [];
  const sLen = s.length;
  const pLen = p.length;

  // simple check before we start diving deeper
  // can't be an anagram if p is smaller
  if (pLen > sLen) {
    return result;
  }

  // create the character profile of p
  const pProfile = new Array(26).fill(0);
  for (let i = 0; i < pLen; ++i) {
    ++pProfile[p.charCodeAt(i) - "a".charCodeAt(0)];
  }
  // store the final result as a string
  const pStr = pProfile.toString();

  // use this to store ongoing profile
  const newProfile = new Array(26).fill(0);

  // sliding window
  let start = 0;
  for (let end = 0; end < sLen; ++end) {
    // update our profile
    ++newProfile[s.charCodeAt(end) - "a".charCodeAt(0)];

    // once we reach our desired length
    // evaluate and move the window
    if (end - start + 1 === pLen) {
      // check if they are anagrams
      if (newProfile.toString() === pStr) {
        result.push(start);
      }

      // move the window
      // by removing the start character from our profile
      // and incrementing start
      --newProfile[s.charCodeAt(start) - "a".charCodeAt(0)];
      ++start;
    }
  }

  return result;
};
