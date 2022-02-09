/**
 * Time Complexity: O(log n), binary search
 * Space Complexity: O(1)
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = (num) => {
  // typical binary search
  let start = 1;
  let end = num;

  while (start <= end) {
    let mid = Math.floor((end + start) / 2);

    // compute the square of mid
    let midSquare = mid * mid;
    if (midSquare > num) {
      end = mid - 1;
    } else if (midSquare < num) {
      start = mid + 1;
    } else {
      return true;
    }
  }

  // if we can't find it
  // then it's not a perfect square
  return false;
};
