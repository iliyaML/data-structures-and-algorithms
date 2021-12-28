/**
 * Brute Force solution, loop through each row and col
 * Time Complexity: O(m*n), m = rows, n = cols
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

  for (let r = 0; r < m; ++r) {
    for (let c = 0; c < n; ++c) {
      if (matrix[r][c] === target) {
        return true;
      }
    }
  }

  return false;
};
