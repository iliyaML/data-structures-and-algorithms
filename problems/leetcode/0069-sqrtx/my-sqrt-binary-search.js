/**
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 * @param {number} x
 * @return {number}
 */
const mySqrt = (x) => {
  // immediately return the values if x is less than 2
  if (x < 2) {
    return x;
  }

  // binary search approach
  let start = 1,
    end = x;

  while (start < end) {
    let mid = start + Math.floor((end - start) / 2);
    let tmp = x / mid;

    if (mid < tmp) {
      start = mid + 1;
    } else if (mid > tmp) {
      end = mid;
    } else {
      return mid;
    }
  }

  return start - 1;
};
