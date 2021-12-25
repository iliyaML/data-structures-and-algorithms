/**
 * Assumes the array is already sorted
 * Time Complexity: O(log m*n), m = rows, n = cols
 * Space Complexity: O(1)
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = (matrix, target) => {
  // do some check to ensure matrix is valid (just good practice)
  if (matrix === null) {
    return false;
  }

  const m = matrix.length; // row length
  const n = matrix[0].length; // col length

  let startIndex = 0;
  let endIndex = m * n - 1;
  while (startIndex <= endIndex) {
    let midIndex = Math.floor((startIndex + endIndex) / 2);
    let valueAtIndex = matrix[Math.floor(midIndex / n)][midIndex % n];

    if (valueAtIndex === target) {
      return true;
    } else if (valueAtIndex > target) {
      endIndex = midIndex - 1;
    } else if (valueAtIndex < target) {
      startIndex = midIndex + 1;
    }
  }

  return false;
};
