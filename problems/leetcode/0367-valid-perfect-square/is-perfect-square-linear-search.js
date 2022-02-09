/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = (num) => {
  let start = 1;

  // check all the numbers from 1 up to num
  while (start <= num) {
    let square = start * start;
    if (square === num) {
      return true;
    } else if (square < num) {
      ++start;
    } else if (square > num) {
      // if we have exceeded num
      // that means it is not a perfect square
      return false;
    }
  }

  return false;
};
