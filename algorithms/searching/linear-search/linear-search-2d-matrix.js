/**
 * Given a 2D matrix, loop through each row and cols
 * Time Complexity: O(m*n), m = rows, n = cols
 * Space Complexity: O(1)
 * @param {*} matrix
 * @param {*} target
 * @returns
 */
const linearSearchMatrix = (matrix, target) => {
  // ensure matrix is valid (good practice)
  if (matrix === null) {
    return [-1, -1];
  }

  const rowL = matrix.length; // m
  const colL = matrix[0].length; // n

  // loop each row and col
  for (let r = 0; r < rowL; ++r) {
    for (let c = 0; c < colL; ++c) {
      if (matrix[r][c] === target) {
        return [r, c];
      }
    }
  }

  // we haven't found anything
  return [-1, -1];
};

const matrix = [
  [1, 3, 4, 6, 7],
  [2, 10, 39, 234, 57],
  [5, 99, 87, 34, 42],
];
console.log(linearSearchMatrix(matrix, 42)); // [2, 4]
console.log(linearSearchMatrix(matrix, 89)); // [-1, -1]
