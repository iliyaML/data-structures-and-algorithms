/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * Time Complexity: O(log n), Binary Search
 * Space Complexity: O(1), iterative approach
 * @param {number} n
 * @return {number}
 */
const guessNumber = (n) => {
  // typical binary search
  let start = 1;
  let end = n;
  while (start <= end) {
    let mid = Math.floor((end + start) / 2);
    let theGuess = guess(mid);

    if (theGuess === -1) {
      end = mid - 1;
    } else if (theGuess === 1) {
      start = mid + 1;
    } else {
      return mid;
    }
  }
};
