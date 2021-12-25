const binarySearch = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return true;
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return false;
};

/**
 * Time Complexity: O(m * log n), m = rows, n = cols
 * Space Complexity: O(1)
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = (matrix, target) => {
  // ensure matrix is valid (good practice)
  if (matrix === null) {
    return false;
  }

  // loop from the end to find the first array with the first element smaller than target
  // that means the target could possible be in that array
  for (let i = matrix.length - 1; i >= 0; --i) {
    if (matrix[i][0] <= target) {
      // found possible array, we use binary search to help find the element since it is already sorted
      return binarySearch(matrix[i], target);
    }
  }

  // we haven't found anything
  return false;
};
