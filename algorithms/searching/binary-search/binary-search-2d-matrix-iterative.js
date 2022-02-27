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
    // to help avoid integer overflow
    let midIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
    let valueAtIndex = matrix[Math.floor(midIndex / n)][midIndex % n];

    if (valueAtIndex === target) {
      return [Math.floor(midIndex / n), midIndex % n];
    } else if (valueAtIndex > target) {
      endIndex = midIndex - 1;
    } else if (valueAtIndex < target) {
      startIndex = midIndex + 1;
    }
  }

  return [-1, -1];
};

let matrix = [
  [0, 1, 2, 3, 4],
  [5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24],
];
console.log(searchMatrix(matrix, 23)); // [4, 3]
console.log(searchMatrix(matrix, 0)); // [0, 0]
console.log(searchMatrix(matrix, 100)); // [-1, -1]
