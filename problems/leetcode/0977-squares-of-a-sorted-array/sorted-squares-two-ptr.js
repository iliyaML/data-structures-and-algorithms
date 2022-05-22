/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = (nums) => {
  let n = nums.length;

  let results = new Array(n).fill(0);

  // we will populate the answers from the highest index
  let highestSquareIndex = n - 1;

  // two pointer approach
  let start = 0;
  let end = n - 1;

  while (start <= end) {
    // calculate the square value at both pointers
    let startSquare = Math.pow(nums[start], 2);
    let endSquare = Math.pow(nums[end], 2);

    // check which is bigger
    // and move the pointer
    if (startSquare > endSquare) {
      results[highestSquareIndex] = startSquare;
      ++start;
    } else {
      results[highestSquareIndex] = endSquare;
      --end;
    }

    // move the highest square index to the next slot available
    // in decreasing manner
    --highestSquareIndex;
  }

  return results;
};
