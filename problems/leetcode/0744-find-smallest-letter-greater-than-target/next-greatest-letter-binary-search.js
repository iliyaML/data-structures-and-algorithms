/**
 * Time Complexity: O(log n), binary search
 * Space Complexity: O(1)
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
const nextGreatestLetter = (letters, target) => {
  // assume the answer is the first letter
  let result = letters[0];

  // typical binary search approach
  let start = 0;
  let end = letters.length - 1;
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);

    // evalute the letter at the middle
    if (letters[mid] > target) {
      // if it is greater, we update our result
      result = letters[mid];

      // shrink the space from the right side
      // to find a letter that's greater than target but
      // lower than our current result
      end = mid - 1;
    } else {
      // if letter at middle is smaller,
      // we shrink the search space from the left
      start = mid + 1;
    }
  }

  return result;
};
