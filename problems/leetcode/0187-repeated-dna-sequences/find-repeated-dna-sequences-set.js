/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {string} s
 * @return {string[]}
 */
const findRepeatedDnaSequences = (s) => {
  // sets to keep track of what we've seen and our results
  let seen = new Set();
  let results = new Set();

  // loop through the characters in s
  // process 10 chars at a time (sliding window)
  for (let i = 0, l = s.length - 9; i < l; ++i) {
    let seq = s.substr(i, 10);
    // if we've seen the sequence before, we add it to our results
    // meaning we've seen it at least twice
    if (seen.has(seq)) {
      results.add(seq);
    }

    // add the sequence to our seen set
    seen.add(seq);
  }

  // return the results in an array data structure
  return [...results.values()];
};
